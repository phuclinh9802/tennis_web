import React from "react";
import Card from "../components/Card/Card"
import "../asset/css/index.css"

function Home() {
    return (
        <div class="cards">
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
    );
}
export default Home;