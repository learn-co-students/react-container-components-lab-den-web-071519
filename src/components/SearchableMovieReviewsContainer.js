import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RiGrSIK5PgPIMGzCVoOcJQAfVYIeFIQh';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    componentDidMount(){
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=RiGrSIK5PgPIMGzCVoOcJQAfVYIeFIQh`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    reviews: json.results.slice(0, 3)
                })
            })
    }

    handleSubmit = () => {
         fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=RiGrSIK5PgPIMGzCVoOcJQAfVYIeFIQh`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    reviews: json.results.slice(0, 3)
                })
            })
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                </label>
                <input type="submit" />
            </form>

                <MovieReviews reviews={this.state.reviews}/>
                {this.state.searchTerm}
                ------------ABOVE IS SEARCH, BELOW IS RECENCY
            </div>
        )
    }
}
