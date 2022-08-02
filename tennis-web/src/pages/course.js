import React from "react";
import BasicTabs from "../components/TabPanel/TabPanel";
import Carousel from "react-material-ui-carousel";
import Divider from '@mui/material/Divider';
import Fade from 'react-reveal/Fade'
import "./styles/course.css";

function Course() {
    return (
        <>
            <Fade left>
                <div className="course">
                    <div className="img-container">
                        <Carousel height="400px" indicators={false} navButtonsAlwaysInvisible={true}>
                            <img src="https://picsum.photos/id/69/1920" className="img-card" alt="img not found" />
                            <img src="https://picsum.photos/id/70/1920" className="img-card" alt="img not found" />
                            <img src="https://picsum.photos/id/71/1920" className="img-card" alt="img not found" />
                        </Carousel>
                    </div>
                    <div className="content-container">
                        <h1>Course A</h1>
                        <Divider variant="middle" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.</p>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="course">
                    <div className="img-container">
                        <Carousel height="400px" indicators={false} navButtonsAlwaysInvisible={true}>
                            <img src="https://picsum.photos/id/72/1920" className="img-card" alt="img not found" />
                            <img src="https://picsum.photos/id/73/1920" className="img-card" alt="img not found" />
                            <img src="https://picsum.photos/id/74/1920" className="img-card" alt="img not found" />
                        </Carousel>
                    </div>
                    <div className="content-container">
                        <h1>Course B</h1>
                        <Divider variant="middle" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
            </Fade>
            <Fade left>
                <div className="video-container">
                    <div></div>
                    <BasicTabs />
                </div>
            </Fade>
        </>
    );
}

export default Course;