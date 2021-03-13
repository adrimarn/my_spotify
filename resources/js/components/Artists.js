import React, {Component} from 'react';
import Artist from '../components/Artist';
import Pagination from "react-js-pagination";

class Artists extends Component {
    state = {
        artists: [],
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

    getApi(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        fetch(`/api/artists?page=${pageNumber}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    artists: result.data,
                    current_page: result.current_page,
                    per_page: result.per_page,
                    total: result.total
                })

            })
    }

    render() {
        return (
            <div>
            <div className="d-flex justify-content-center my-5">
                <Pagination
                    pageRangeDisplayed={10}
                    activePage={this.state.current_page}
                    itemsCountPerPage={this.state.per_page}
                    totalItemsCount={this.state.total}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="Début"
                    lastPageText="Fin"
                />
            </div>

            <Artist artists={this.state.artists}/>

            </div>


    )
        ;
    }
}

export default Artists;
