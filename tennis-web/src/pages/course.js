import React from "react";
import Carousel from "react-material-ui-carousel"
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed"
import "./styles/course.css"

function Course() {
    return (
        <div className="video-container">
            <div className="section">
                <h2>Drill 1</h2>
                <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
                    <div className="video">
                        <YoutubeEmbed embedId="HGl75kurxok" />
                    </div>
                    <div className="video">
                        <YoutubeEmbed embedId="UpMJOf8jj8k" />
                    </div>
                </Carousel>
            </div>
            <div className="section">
                <h2>Drill 2</h2>
                <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
                    <div className="video">
                        <YoutubeEmbed embedId="HGl75kurxok" />
                    </div>
                    <div className="video">
                        <YoutubeEmbed embedId="UpMJOf8jj8k" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Course;