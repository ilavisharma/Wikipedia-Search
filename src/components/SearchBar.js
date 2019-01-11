import React from 'react';

class SearchBar extends React.Component {
    state = { term: '', };
    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div>
                <form onSubmit={event =>this.onFormSubmit(event)} style={{width: '70%'}}>
                    <div className="form-group" style={{marginTop: '15px'}}>
                        <label>Enter your search</label>
                        <input type="text" className="form-control" value={this.state.term}
                            onChange={event=> this.setState({term: event.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
