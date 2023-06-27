import mongoose from 'mongoose';
import {createStreamer} from "../controllers/streamers-controller";
import {StreamerModel} from "./schemas/streamer";

const MONGO_URL='mongodb+srv://emil:emil@cluster0.lmjrxxh.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;

export const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to the MongoDB instance');
        // const test = await StreamerModel.create({'name':'test','description':'test','likes':0,'platform':'test'})
        // console.log(test.id)

    } catch (error) {
        console.error('Error connecting to the MongoDB', error);
    }
};