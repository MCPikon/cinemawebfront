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
        <div className="mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-center rounded-lg overflow-hidden h-[220px] w-[300px] md:h-[300px] md:w-[420px] lg:h-[320px] lg:w-[440px] xl:h-[426px] xl:w-[600px] mt-2 shadow-md shadow-black">
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

