import React from 'react';
import SearchResult from './SearchResult';

const SearchList = ({ results }) => {
    if (!results) {
        return <div>Enter the search term above</div>;
    }

    if (results[2][0] === "")
        return <SearchResult title={results[1][0]} description={results[2][1]} link={results[3][1]} />;

    return <SearchResult title={results[1][0]} description={results[2][0]} link={results[3][0]} />;


};

export default SearchList;
