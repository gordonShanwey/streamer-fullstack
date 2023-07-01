import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../core/axios.js";

import {Link, useParams} from "react-router-dom";
import ProfileImg from "../assets/profileImg.png";


function StreamerDetails ()  {

    const {id}=useParams();

    const {status,data,error,isFetching}=useQuery(['streamer'],async ()=>{
        const {data}=await axiosInstance.get(`/streamers/${id}`);
        return data;
    });
    return (
        <div className='container  w-full gap-4 h-full mx-auto px-4 '>
            <div className='p2 w-ful h-full flex flex-col overflow-scroll scrollbar-hide '>

                <div >
                    {status === "loading" ? (
                        "Loading..."
                    ) : status === "error" ? (
                        <span>Error: {error.message}</span>
                    ) : (
                        <>
                            <h1 className='mb-14'>{data.name}</h1>
                            <div className='container flex flex-row p-2 border-solid border-2 border-sky-700 rounded-2xl my-2'>
                                <div className="m-2 p-2 rounded  ">
                                    <img className='border-solid border-2 border-zinc-600 rounded-full' src={ProfileImg} alt="profile" />
                                </div>
                                <div className="flex w-full flex-col p1 justify-center h-full mt-3 px-3">
                                    <div className="flex flex-row justify-between mx-16 items-center">
                                        <p className='mb-4'>Platform{data.platform}</p>
                                        <p className='ali'>Likes: {data.likes}</p>
                                    </div>
                                    <div className="flex flex-row justify-between py-8 mx-16">
                                        <p className='ali'>Desc: {data.description}</p>
                                    </div> <div className="flex flex-row justify-between py-8 mx-16">
                                    {/*<button onClick={()=> {*/}

                                    {/*    navigate('/')*/}
                                    {/*}} className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-8 rounded'>*/}
                                    {/*    Back*/}
                                    {/*</button>*/}
                                    <Link to='/' className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-8 rounded'>
                                        Back
                                    </Link>
                                    </div>
                                </div>

                            </div>
                            <div>{isFetching ? "Background Updating..." : " "}</div>
                        </>
                    )}
                </div>
            </div>


        </div>
    );
}


export default StreamerDetails;