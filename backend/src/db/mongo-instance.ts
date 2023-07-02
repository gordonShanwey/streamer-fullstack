import mongoose from 'mongoose';

const MONGO_URL='mongodb+srv://emil:emil@cluster0.lmjrxxh.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;

export const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to the MongoDB instance');

    } catch (error) {
        console.error('Error connecting to the MongoDB', error);
    }
};