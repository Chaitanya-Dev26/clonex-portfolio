import React, { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';

const Video = () => {
    const videoUrl = useContext(VideoContext);

    return (
        <div className='w-full h-full'>
            {videoUrl && (
                <video aria-hidden="true" className="w-full h-full object-cover" autoPlay loop muted src={videoUrl}></video>
            )}
        </div>
    );
};

export default Video;