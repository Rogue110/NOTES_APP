import { databases, config } from './appwrite';

const databaseService = {
    async listDocuments(dbId, colId) {
        try {
            const response = await databases.listDocuments(dbId, colId);
            return response.documents || [];
        } catch (error) {
            console.error('Error fetching Documents:', error);
            return { error: error.message };
        }
    },

    async createDocument(dbId, colId, data, id) {
        try {
            const response = await databases.createDocument(dbId, colId, id, data);
            return response;
        } catch (error) {
            console.error('Error creating Document:', error);
            return { error: error.message };
        }
    },

    async deleteDocument(dbId,colId,id){
        try {
            const response = await databases.deleteDocument(dbId, colId, id);
            return {success: true};
        } catch (error) {
            console.error('Error deleting Document:', error);
            return { error: error.message };
        }
    },
};

export default databaseService;