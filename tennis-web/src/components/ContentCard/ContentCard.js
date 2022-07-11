import React from "react";
import "./ContentCard.css"

function ContentCard({ content, title }) {
    return (
        <div class="card-container">
            <div class="card"><a href="/about">
                <div class="card--display">
                    <h2>{title}</h2>
                </div>
                <div class="card--hover">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <p className="link">Read more</p>
                </div></a>
                <div class="card--border"></div>
            </div>
        </div>
    );
}

export default ContentCard;