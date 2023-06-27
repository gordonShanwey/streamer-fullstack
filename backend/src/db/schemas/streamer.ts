import mongoose from "mongoose";


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
export const StreamerModel = mongoose.model('streamer',streamerSchema)

