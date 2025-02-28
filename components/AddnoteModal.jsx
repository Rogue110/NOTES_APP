import { View,Text, StyleSheet, TouchableOpacity,Modal,TextInput} from "react-native";

const AddnoteModal=({ModalVisible,setModalVisible,addNote,noteText,setNoteText})=>{
    return(
        <Modal
        visible={ModalVisible}
        animationType='slide'
        transparent
        onRequestClose={()=>setModalVisible(false)}
        >
        <View style={Styles.modalOverlay}>
            <View style={Styles.modalContent}>
                <Text style={Styles.modalTitle}>Add a new note</Text>
                <TextInput
                style={Styles.input}
                placeholder='Enter your note'
                placeholderTextColor={'#aaa'}
                value={noteText}
                onChangeText={setNoteText}
                />

            <View style={Styles.modalButtons}>
                <TouchableOpacity style={Styles.cancelButton} onPress={()=>{setModalVisible(false); setNoteText('')}}>
                    <Text style={Styles.cancelButtonText} >Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.saveButton} onPress={addNote}>
                    <Text style={Styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
                
            </View>
        </View>
        </Modal>
    )
}

const Styles = StyleSheet.create({
    modalOverlay:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
      },
      modalContent:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        width:'80%',
      },
      modalTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        textAlign:'center',
      },
      input:{
        borderWidth:1,
        borderBlockColor:'#ccc',
        borderRadius:8,
        padding:10,
        fontSize:16,
        marginBottom:15,
      },
      modalButtons:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      cancelButton:{
        backgroundColor:'#ccc',
        padding:20,
        borderRadius:5,
        flex:1,
        marginRight:10,
        alignItems:'center'
      },
      cancelButtonText:{
        fontSize:16,
        color:'#333',
      },
      saveButton:{
        backgroundColor:'#007bff',
        padding:20,
        borderRadius:5,
        flex:1,
        alignItems:'center',
      },
      saveButtonText:{
        fontSize:16,
        color:'#fff',
      },
})

export default AddnoteModal