import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const NoteItem = ({ note, onDelete }) => {
    return (
        <View style={Styles.noteItem}>
            <Text style={Styles.noteText}>{note.text}</Text>
            <TouchableOpacity onPress={() => onDelete(note.$id)}>
                <Text style={Styles.delete}>❌</Text>
            </TouchableOpacity>
        </View>
    );
};

const Styles=StyleSheet.create({
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
    delete: {
        fontSize: 18,
        color: 'red',
    },
    actions: {
        flexDirection: 'row',
    },
    edit: {
        fontSize: 18,
        marginRight: 10,
        color: 'blue',
    },
})

export default NoteItem;