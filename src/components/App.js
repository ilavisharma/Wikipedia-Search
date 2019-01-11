import React from 'react';
import wiki from '../apis/Wikipedia';
import SearchBar from './SearchBar.js';
import SearchList from './SearchList';

class App extends React.Component {
    state = { result: null };

    onSearchSubmit = async term => {
        const response = await wiki.get('', {
            params: {
                search: term
            }
        });
        this.setState({ result: response.data });
    }


    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <SearchList results={this.state.result} />
            </div>
        );
    }
}

export default App;
