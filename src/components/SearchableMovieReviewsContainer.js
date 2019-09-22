import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'rRrv2lve4nKtva81lMMCAAKUhJvzc8ve';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchedMovieReviews: [],
        query: 'lebowski'
    }

    componentDidMount(){
        fetch(`${URL}`)
            .then(response => response.json())
            .then(res => this.setState({searchedMovieReviews: res.results}))
    }

    renderSearchedMovieCards = () => {
        return this.state.searchedMovieReviews.map((movie, index) => {
            return <MovieReviews className='review' key={index} movie={movie} />
        })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <div className='review-list'>
                    {/* {this.renderSearchedMovieCards()} */}
                </div>
            </div>
        )
    }
}

