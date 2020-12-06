import React from "react";
import Card from "./Card"

function CardList(props) {
    return (
        <div className="cardList container row mx-auto">
            {props.users.map(user => (
                <div className="col-md-3">
                    <Card style={{ width: "8rem" }} key={user.id.value} user={user} />
                </div>
            ))}
        </div>
    );
};

export default CardList;
