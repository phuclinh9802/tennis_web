import React from "react";
import './card.css'

function Card({img,title,content}) {
    return (
        <div className="container grid">
            <div className="card">
                <div className="image">
                    <img src={img} alt="Card"/>
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card