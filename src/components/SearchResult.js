import React from 'react';


const SearchResult = ({ title, description, link }) => {

    return (
        <div className="well">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank">Wanna checkout WIKIPEDIA</a>
        </div>
    );
};

export default SearchResult;
