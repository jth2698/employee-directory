import React from "react";
import "./style.css";

function SortButtons() {
    return (

        <div className="container">
            <div className="container btn-group mx-auto" role="group">
                <button type="button" className="btn btn-secondary">Sort By Last Name</button>
                <button type="button" className="btn btn-secondary">Sort By First Name</button>
            </div>
        </div>

    );
}

export default SortButtons;
