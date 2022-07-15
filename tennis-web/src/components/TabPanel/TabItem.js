import React from "react";
import VideoList from "../VideoList/VideoList";

function TabItem({ playlistId }) {
    return (
        <div className="section">
            <VideoList playlistId={playlistId} />
        </div>
    )
}

export default TabItem;