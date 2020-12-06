import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search container pt-3">
            <div className="input-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for a user"
                    id="search"
                />
                <button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="input-group-append btn btn-success">
                    Search
                    </button>
            </div>
        </form>
    );
}

export default SearchForm;
