import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import ContentCard from "../components/ContentCard/ContentCard";
import Fade from 'react-reveal/Fade'
import "./styles/index.css";

function Home() {
    return (
        <>
            <Fade>
                <div className="about">
                    <img src="https://picsum.photos/id/69/260" className="avatar" alt="avatar" />
                    <div className="about-content">
                        <h2>About Me</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
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
                <div className="content-card">
                    <ContentCard
                        title="What"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                    <ContentCard
                        title="When"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                    <ContentCard
                        title="Why"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                    <ContentCard
                        title="How"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                </div>
            </Fade>
        </>
    );
}
export default Home;
