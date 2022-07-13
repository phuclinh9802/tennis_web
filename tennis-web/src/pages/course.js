import React from "react";
import Carousel from "react-material-ui-carousel"
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed"
import "./styles/course.css"

function Course() {
    return (
        <div className="video-container">
            <div className="section">
                <h2>Drill 1</h2>
                <Carousel autoPlay={false} cycleNavigation = {false} duration = {1000}>
                    <div className="video">
                        <YoutubeEmbed embedId="HGl75kurxok" />
                        <h3>Title</h3>
                    </div>
                    <div className="video">
                        <YoutubeEmbed embedId="UpMJOf8jj8k" />
                        <h3>Title</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Course;