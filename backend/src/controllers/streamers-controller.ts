import {IStreamer} from "../models/streamer-model";
import {StreamerModel} from "../db/schemas/streamer";

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
const updateStreamer = async (streamer:IStreamer) => {
    try {
        return await StreamerModel.findByIdAndUpdate(streamer.id,streamer)
    } catch (e:any) {
        throw {status:500,message:e.message}
    }
}

