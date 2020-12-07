import React from "react";

const Card = (props) => {

    return (
        <div className="card mb-5 mx-auto" style={props.style}>
            <img className="card-img-top" alt="user" src={props.user.picture.large} />
            <div className="card-text text-center">
                <p>{props.user.name.title}. {props.user.name.first} {props.user.name.last}</p>
                <p>{props.user.email}</p>
            </div>
        </div>
    );
};

export default Card;