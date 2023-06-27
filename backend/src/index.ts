import express, {Express} from 'express';
import cors from 'cors';
import {allowedOrigins} from "./configs/allowed-origins";
import {connectToDatabase} from "./db/mongo-instance";
import {StreamersRouter} from "./routes";



const app:Express = express();
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json({strict: false}))

app.use('/', StreamersRouter)

app.listen(5000, () => console.log('Server running'));
connectToDatabase();
