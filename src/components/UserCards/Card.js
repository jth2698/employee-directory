import React from "react";

const Card = (props) => {

    return (
        <div className="card mb-5 mx-auto" style={props.style}>
            <img className="card-img-top" alt="user" src={props.user.picture.medium} />
            <p className="card-text">
                {props.user.name.title}. {props.user.name.first} {props.user.name.last}
            </p>
        </div>
    );
};

export default Card;