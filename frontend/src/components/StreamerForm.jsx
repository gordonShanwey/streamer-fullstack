
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {axiosInstance} from "../core/axios.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";


const createStreamer = async (data) => {
    const {data: streamer} = await axiosInstance.post('/streamers', data);
    return streamer;
}
function StreamerForm() {
    const queryClient = useQueryClient();
    const {mutateAsync} = useMutation(createStreamer, {
        onSuccess: () => {
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled:async () => {
             await queryClient.invalidateQueries('create')
        }
    });
    const schema = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        platform: yup.string().required(),
    });

    const {register, handleSubmit, } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        await mutateAsync({...data,likes:0})
    }
    return (
        <div className='container p-12'>
            <form className='flex flex-col h-full items-center' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='bg-blue-50 px-2 py-1 border-solid border-2 border-sky-700 rounded-2xl w-2/3'
                    type="text"
                    placeholder='Name'
                    {...register("name")}
                />
                <select className='bg-blue-50 px-2 py-1 border-solid border-2 border-sky-700 rounded-2xl mt-4 w-2/3'
                        {...register("platform")}>
                    <option value="Twitch">Twitch</option>
                    <option value="Youtube">Youtube</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Kick">Kick</option>
                    <option value="Rumble">Rumble</option>
                </select>
                <textarea
                    className='bg-blue-50 px-2 py-1 border-solid border-2 border-sky-700 rounded-2xl w-2/3 my-4 h-32'
                    placeholder='Description'
                    {...register("description")}
                />
                {/*<input type='submit'  className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-8 rounded w-2/3'/>*/}

            </form>
            <button onClick={handleSubmit(onSubmit)}
                    className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-8 rounded w-2/3'
            >
                Add Streamer
            </button>
        </div>
    );
}

export default StreamerForm;