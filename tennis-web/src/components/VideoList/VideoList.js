import React from "react";

function VideoList({ playlistId }) {
    return (
        <iframe
            id="ytplayer"
            className="video"
            type="text/html"
            src={`https://www.youtube.com/embed?listType=playlist&list=${playlistId}`}
            frameborder="0"
            title="youtubeplaylist"
        />
    )
}

export default VideoList;