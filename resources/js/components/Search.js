import React, {Component} from 'react';

class Search extends Component {

    state = {
        artists: [],
        albums: [],
        genres: [],
        current_page: 1,
        per_page: 50,
        total: 50
    }

    componentDidMount() {
        this.getApi(this.state.current_page)
    }

    handlePageChange(pageNumber) {
        this.getApi(pageNumber);
    }

    render() {

        return ('');
    }
}

export default Search;
