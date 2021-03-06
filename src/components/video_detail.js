import React from 'react';

const VideoDetail= ({video}) => {
    if(!video) {
        return (
            <div>Loading...</div>
        );
    }
    const videoID = video.id.videoId;
    const URL = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={URL}></iframe>
            </div>
            <div className="details">
                <h3 className="videoHeading">{video.snippet.title}</h3>
                <div className="videoDescription">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;