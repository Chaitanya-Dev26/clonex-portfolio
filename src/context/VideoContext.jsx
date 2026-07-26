import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        // Fetch the video once as a Blob to prevent duplicate network requests
        fetch('/bg.mp4')
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setVideoUrl(url);
            })
            .catch(err => {
                console.error("Failed to fetch video blob, falling back to direct URL", err);
                setVideoUrl('/bg.mp4'); // Fallback
            });

        return () => {
            if (videoUrl && videoUrl.startsWith('blob:')) {
                URL.revokeObjectURL(videoUrl);
            }
        };
    }, []);

    return (
        <VideoContext.Provider value={videoUrl}>
            {children}
        </VideoContext.Provider>
    );
};
