'use client'

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { VideoPlayerSkeleton } from "./skeletons";

export function VideoPlayer({ videoUrl } : { videoUrl: string }) {
    const [hasWindow, setHasWindow] = useState(false);
        useEffect(() => {
            if (typeof window !== "undefined") setHasWindow(true);
        }, []);
    return (
        <div className="mx-auto md:mx-0 md:flex md:items-center md:justify-center rounded-lg overflow-hidden h-[226px] w-[300px] md:h-[426px] md:w-[600px] mt-2 shadow-md shadow-slate-900">
            {
                hasWindow && <ReactPlayer
                    width="100%"
                    height="100%"
                    url={videoUrl}
                    controls={true}
                    playing
                    muted
                    pip={true}
                    fallback={<VideoPlayerSkeleton/>}
                />
            }
            <source src={videoUrl} type="video/mp4" />
        </div>
    );
};

