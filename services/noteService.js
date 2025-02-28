import { ID } from 'react-native-appwrite';
import databaseService from "./databaseService";
import { config } from './appwrite';

const noteService = {
    async getNotes() {
        try {
            const response = await databaseService.listDocuments(
                config.dbId,
                config.col.notes
            );
            if ('error' in response) {
                return { error: response.error };
            }
            return { data: response };
        } catch (error) {
            return { error: error.message };
        }
    },

    async addNote(text){
        if(!text){
            return { error: 'Note text is required' };
        }

        const data = {
            text: text,
            createdAt: new Date().toISOString()
        };

        try {
            const response = await databaseService.createDocument(
                config.dbId,
                config.col.notes,
                data,
                ID.unique()
            );
            
            if('error' in response) {
                return { error: response.error };
            }
            return { data: response };
        } catch (error) {
            return { error: error.message };
        }
    },

    async deleteNote(id){
        try {
            const response = await databaseService.deleteDocument(
                config.dbId,
                config.col.notes,
                id
            );
            if('error' in response) {
                return { error: response.error };
            }
            return { success: true};
        } catch (error) {
            return { error: error.message };
        }
    }
};

export default noteService;