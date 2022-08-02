import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import Fade from 'react-reveal/Fade'
import Carousel from "react-material-ui-carousel"
import Image from "../components/Gallery/MainImages"
import "./styles/index.css";

function Home() {
    return (
        <div>
            <Fade left>
                <Carousel autoPlay={false} animation="slide" duration="600">
                    <div className="about">
                        <img src={process.env.PUBLIC_URL + "/images/IMG_0229_avatar.jpg"} className="avatar" alt="avatar" />
                        <div className="about-content">
                            <h2>About Me</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="about">
                        <img src="https://picsum.photos/id/169/260" className="avatar" alt="avatar" />
                        <div className="about-content">
                            <h2>About Me</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="about">
                        <img src="https://picsum.photos/id/269/260" className="avatar" alt="avatar" />
                        <div className="about-content">
                            <h2>About Me</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="about">
                        <img src="https://picsum.photos/id/269/260" className="avatar" alt="avatar" />
                        <div className="about-content">
                            <h2>About Me</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </Carousel>
            </Fade>
            <Fade right>
                <div className="videos">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                </div>
            </Fade>
            <Fade left>
                <div className="cards">
                    <CourseCard
                        img="https://picsum.photos/id/54/260"
                        title='Course A'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                    <CourseCard
                        img="https://picsum.photos/id/55/260"
                        title='Course B'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                    <CourseCard
                        img="https://picsum.photos/id/56/260"
                        title='Course C'
                        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                </div>
            </Fade>
            <Fade right>
                <div className="gallery">
                    <Image />
                </div>
            </Fade>
            <Fade left>
                <Carousel indicators={false} stopAutoPlayOnHover={true} navButtonsAlwaysInvisible={true}>
                    <>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/25/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h2>-Name</h2>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/26/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h2>-Name</h2>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/27/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h2>-Name-</h2>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/28/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h2>-Name-</h2>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/29/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h2>-Name-</h2>
                            </div>
                        </div>
                        <div className="feedback">
                            <div className="student">
                                <img src="https://picsum.photos/id/30/260" className="avatar" alt="avatar" />
                            </div>
                            <div className="comment">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h2>-Name</h2>
                            </div>
                        </div>
                    </>
                </Carousel>
            </Fade>
        </div>
    );
}
export default Home;
