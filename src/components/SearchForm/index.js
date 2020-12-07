import React from "react";
import "./style.css";

function SearchForm({ handleChange }) {
    return (
        <form className="search container pt-3">
            <div className="input-group">
                <input
                    onChange={handleChange}
                    type="search"
                    className="form-control"
                    placeholder="Search for an employee"
                />
            </div>
        </form>
    );
}

export default SearchForm;
