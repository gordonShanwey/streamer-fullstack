import mongoose from "mongoose";
import {IStreamer} from "../../models/streamer-model";


const streamerSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    likes: {type:Number,required:true},
    platform: {type:String,required:true},
}, { toJSON: { virtuals: true } })

streamerSchema.virtual('id').get(function() {
    return this._id.toString();
});
streamerSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
    }
});



export const getStreamers = async () => {
    try {
        return await StreamerModel.find({})

    } catch (e:any) {
        throw {status:500,message:e.message}
    }
}
export const getStreamerById = async (id:string) =>  {
    try {
        return await StreamerModel.findById(id)
    }
    catch (e:any) {
        throw {status:500,message:e.message}
    }
}
export const createStreamer = async (streamer:IStreamer) => {
    try {
        return await StreamerModel.create(streamer)
    } catch (e:any) {
        throw {status:500,message:e.message}
    }
}
export const updateStreamer = async (streamer:IStreamer) => {
    try {
        return await StreamerModel.findByIdAndUpdate(streamer.id,streamer)
    } catch (e:any) {
        throw {status:500,message:e.message}
    }
}


export const StreamerModel = mongoose.model('streamer',streamerSchema)

