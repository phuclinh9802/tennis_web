import React from "react";
import Card from "../components/Card/Card";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";
import Footer from "../components/Footer/Footer";
import ContentCard from "../components/ContentCard/ContentCard";
import "../asset/css/index.css";

function Home() {
    return (
        <>
            <div className="cards">
                <Card
                    img="https://picsum.photos/id/54/260"
                    title='Course A'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                <Card
                    img="https://picsum.photos/id/55/260"
                    title='Course B'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                <Card
                    img="https://picsum.photos/id/56/260"
                    title='Course C'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
            </div>
            <div className="videos">
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="content-card">
               <ContentCard
                    title="Coaches"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <ContentCard
                    title="Philosophy"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <ContentCard
                    title="Benefit"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."  />
                <ContentCard
                    title="Location"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
            </div>
            <Footer />
        </>
    );
}
export default Home;