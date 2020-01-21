import React from "react";

const SearchArea = (props) => {
    return (
        <div className="search-input">
            <form action="" onSubmit={props.handleSubmit}>
                <div className="input-area">
                    <input type="text" placeholder="searching movie..." onChange={props.handleChange}/>
                    <button className="search-button" type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Search</button>
                </div>
            </form>
        </div>
    )
};

export default SearchArea;
