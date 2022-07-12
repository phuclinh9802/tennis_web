import React from "react";
import './CourseCard.css'

function CourseCard({img,title,content}) {
    return (
        <div className="container grid">
            <div className="card">
                <div className="image">
                    <img src={img} alt="Card"/>
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <a className="link" href="/course">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default CourseCard