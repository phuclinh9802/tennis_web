import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import Fade from 'react-reveal/Fade'
import Carousel from "react-material-ui-carousel"
import Gallery from "react-grid-gallery"
import { MainImages, getMainImages } from "../components/Gallery/MainImages";
import "./styles/index.css";

function Home() {
    return (
        <div>
            <Fade>
                <Carousel autoPlay={false} animation="slide" duration="600">
                    <div className="about">
                        <img src= {process.env.PUBLIC_URL + "/images/IMG_0229_avatar.jpg"} className="avatar" alt="avatar" />
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
            <Fade>
                <div className="videos">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                </div>
            </Fade>
            <Fade>
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
            <Fade>
                <div className="gallery">
                    <Gallery images={MainImages}/>
                </div>
            </Fade>
        </div>
    );
}
export default Home;
