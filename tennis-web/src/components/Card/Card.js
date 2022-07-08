import React from "react";
import './card.css'

class Card extends React.Component {
    render() {
        return (
            <div class="container grid">
                <div class="card">
                    <div class="image">
                        <img src={this.props.img}/>
                    </div>
                    <div class="content">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card