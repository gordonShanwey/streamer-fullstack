
import PropTypes from 'prop-types';
import  ProfileImg from '../assets/profileImg.png';
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "../core/axios.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
Streamer.propTypes = {
    streamer: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        likes: PropTypes.number,
        platform: PropTypes.string,
        id: PropTypes.string
    }),
    refetch: PropTypes.func
};
const updateStreamer = async (data) => {
    console.log(data)
    const {data: streamer} = await axiosInstance.put(`/streamers/${data.id}/vote`, data);
    return streamer;
}
function Streamer(props) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutateAsync} = useMutation(updateStreamer, {
        onSuccess: () => {
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled:async () => {
            await queryClient.invalidateQueries('updated')
        }
    });
    const handleUpvote = async () => {
        await mutateAsync({...props.streamer,likes:props.streamer.likes+1})
    }
    return (
        <div className='container flex flex-row p-2 border-solid border-2 border-sky-700 rounded-2xl my-2'>
            <div className="m-2 p-2 rounded  ">
                <img className='border-solid border-2 border-zinc-600 rounded-full' src={ProfileImg} alt="profile" />
            </div>
            <div className="flex w-full flex-col p1 justify-center h-full mt-3 px-3">
                <div className="flex flex-row justify-between mx-16 items-center">
                    <h1 className='mb-4'>{props.streamer.name}</h1>
                    <p className='ali'>Likes: {props.streamer.likes}</p>
                </div>
                <div className="flex flex-row justify-between py-8 mx-16">
                    <button
                        onClick={handleUpvote}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded'>
                        Upvote
                    </button>
                    <button onClick={()=>navigate(`/${props.streamer.id}`)} className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-8 rounded'>
                        Details
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Streamer;