
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../core/axios.js";
import Streamer from "../components/Streamer.jsx";
import StreamerForm from "../components/StreamerForm.jsx";





export const StreamersList = () => {
    const {status,data,error,fetchStatus,isFetching}=useQuery(['streamers'],async ()=>{
        const {data}=await axiosInstance.get('/streamers');
        return data;
    });
    console.log(data);
    console.log(status);
    console.log(fetchStatus);
    return (
        <div className='container  w-full gap-4 h-full mx-auto px-4 columns-2  '>
            <div className='p2 w-ful h-full flex flex-col overflow-scroll scrollbar-hide '>
                <h1 className='mb-14'>StreamersList</h1>
                <div >
                    {status === "loading" ? (
                        "Loading..."
                    ) : status === "error" ? (
                        <span>Error: {error.message}</span>
                    ) : data && status ==='success' ? (
                        <>
                            <div>
                                {data.map((streamer) => (
                                    <div key={streamer.id}>
                                        <Streamer  streamer={streamer} />
                                    </div>
                                ))}
                            </div>

                        </>
                    ):(
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    )}
                </div>
            </div>
            <div className='p2 w-ful h-full'>
                <h1>Streamer Form</h1>
                <StreamerForm />
            </div>

        </div>
    );
};


