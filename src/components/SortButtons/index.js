import React from "react";
import "./style.css";

const SortButtons = ({
    sortLast,
    sortFirst
}) => {
    return (
        <div className="container">
            <div className="container btn-group mx-auto" role="group">
                <button type="button" className="btn btn-secondary" onClick={sortLast}>Sort By Last Name</button>
                <button type="button" className="btn btn-secondary" onClick={sortFirst}>Sort By First Name</button>
            </div>
        </div>
    )
}


export default SortButtons;
