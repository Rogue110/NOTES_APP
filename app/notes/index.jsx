import { useState ,useEffect} from "react";
import { View,Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import Notelist from "@/components/Notelist";
import AddnoteModal from "@/components/AddnoteModal";
import noteService from "@/services/noteService";

const NotesScreen=()=>{
    const [notes,setNotes]=useState([])

    const [ModalVisible,setModalVisible]=useState(false);
    const [noteText,setNoteText]=useState('');
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetchNotes();
    },[]);

    const fetchNotes = async () =>{
        setLoading(true);
        const response = await noteService.getNotes();
        if(response.error){
            setError(response.error);
            Alert.alert('Error',response.error);
        }else{
            setNotes(response.data);
            setError(null);
        }

        setLoading(false);
    }

    const addNote = async () => {
        if(noteText.trim() === '') return;
    
        try {
            const response = await noteService.addNote(noteText);
            if(response.error) {
                Alert.alert('Error', response.error);
                return;
            }
            
            await fetchNotes(); // Refresh the notes list
            setNoteText('');
            setModalVisible(false);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    }

    const deleteNote = async (id) => {  
        Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: async () => {
                    try {
                        const response = await noteService.deleteNote(id);
                        if (response.error) {
                            Alert.alert('Error', response.error);
                        } else {
                            setNotes(notes.filter((note) => note.$id !== id));
                        }
                    } catch (error) {
                        Alert.alert('Error', 'Failed to delete note');
                    }
                }
            }
        ]);
    };

    return(
        <View style={Styles.container}>
            { loading ? (
                <ActivityIndicator size="large" color="#007bff" />
            ):(
                <>
                {error && <Text style={Styles.errorText}>{error}</Text>}
                <Notelist notes={notes} onDelete={deleteNote}/>
                </>
            )}
           
            <TouchableOpacity style={Styles.addButton} onPress={()=>setModalVisible(true)}>
                <Text style={Styles.addButtonText}>+ Add Note</Text>
            </TouchableOpacity>

            {/* Modal */}
            <AddnoteModal
                ModalVisible={ModalVisible}
                setModalVisible={setModalVisible}
                addNote={addNote}
                noteText={noteText}
                setNoteText={setNoteText}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20,
        backgroundColor:'#fff',
    },
    noteItem:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f5f5f5',
        borderRadius:5,
        marginVertical:5,
    },
    noteText:{
        fontSize:16,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#ff8c00',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
      },
      addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      errorText:{
        color:'red',
        textAlign:'center',
        marginBottom:10,
        fontSize:16,
      }
     
})

export default NotesScreen;