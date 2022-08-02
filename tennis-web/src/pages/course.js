import React from "react";
import BasicTabs from "../components/TabPanel/TabPanel";
import Carousel from "react-material-ui-carousel"
import "./styles/course.css"

function Course() {
    return (
        <>
            <div className="course">
                <div className="img-container">
                    <Carousel height="400px" indicators={false}>
                        <img src="https://picsum.photos/id/69/1920" className="img-card" alt="img not found" />
                        <img src="https://picsum.photos/id/70/1920" className="img-card" alt="img not found" />
                        <img src="https://picsum.photos/id/71/1920" className="img-card" alt="img not found" />
                    </Carousel>
                </div>
                <div className="content-container">
                    <h1>Course A</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="img-container">
                    <Carousel height="400px" indicators={false}>
                        <img src="https://picsum.photos/id/72/1920" className="img-card" alt="img not found" />
                        <img src="https://picsum.photos/id/73/1920" className="img-card" alt="img not found" />
                        <img src="https://picsum.photos/id/74/1920" className="img-card" alt="img not found" />
                    </Carousel>
                </div>
                <div className="content-container">
                    <h1>Course B</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div className="video-container">
                <div></div>
                <BasicTabs />
            </div>
        </>
    );
}

export default Course;