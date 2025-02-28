import { Client, Databases } from 'react-native-appwrite';
import { Platform } from 'react-native';

const client = new Client();
const databases = new Databases(client);

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    dbId: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    col: {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID
    }
};

// Initialize the client
client.setEndpoint(config.endpoint).setProject(config.projectId);

// Set platform-specific settings
switch(Platform.OS) {
    case 'ios':
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_BUNDLE_ID);
        break;
    case 'android':
        client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
        break;
}

export { client, databases, config };