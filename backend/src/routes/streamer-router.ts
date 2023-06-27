import express, {Request, Response} from "express";
import {IStreamer} from "../models/streamer-model";
import {createStreamer, getStreamerById, getStreamers} from "../controllers/streamers-controller";

const router = express.Router()

router.get('/streamers',  async(req:Request, res:Response) => {
    try {
        const streamers:IStreamer[] = await getStreamers()
        res.status(200).send(streamers)
    }
    catch (e:any) {
        console.log(e.message)
        res.status(500).send(e.message)
    }
})
router.get('/streamers/:id',  async(req:Request, res:Response) => {
    try {
        const streamer:IStreamer = await getStreamerById(req.params.id)
        res.status(200).send(streamer)

    }
    catch (e:any) {
        console.log(e.message)
        res.status(500).send(e.message)
    }
})
router.post('/streamers', async (req:Request, res:Response) => {
    try {
        const payload:IStreamer = req.body
        const streamer = await createStreamer(payload);
        console.log(streamer)
        res.status(200).send(streamer)
    } catch (e:any) {
        console.log(e.message)
        res.status(500).send(e.message)
    }
})


export default router

// POST /streamers: An endpoint to receive new streamer submissions from the frontend and store them in a database.
//
//     GET /streamers: An endpoint to return all the stored streamer submissions in response to a request from the frontend.
//
//     GET /streamer/[streamerId]: An endpoint to return data about a specific streamer.
//
//     PUT /streamers/[streamerId]/vote: An endpoint to receive an upvote for a specific streamer and update their current upvote/downvote coun