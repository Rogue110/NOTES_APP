import { View,FlatList } from "react-native"
import NoteItem from "./Noteitem"

const Notelist = ({ notes, onDelete }) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.$id || item.id}
                renderItem={({item}) => (
                    <NoteItem 
                        note={item}
                        onDelete={() => onDelete(item.$id)}  // Make sure to pass the ID
                    />
                )}
            />
        </View>
    );
};

export default Notelist;