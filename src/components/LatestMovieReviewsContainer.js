import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'rRrv2lve4nKtva81lMMCAAKUhJvzc8ve';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        latestMovieReviews: []
    }

    componentDidMount(){
        fetch(`${URL}`)
            .then(response => response.json())
            .then(res => this.setState({latestMovieReviews: res.results}))
    }

    renderLatestMovieCards = () => {
        return this.state.latestMovieReviews.map((movie, index) => {
            return <MovieReviews className='review' key={index} movie={movie} />
        })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <div className='review-list'>
                    {this.renderLatestMovieCards()}
                </div>
            </div>
        )
    }
}

