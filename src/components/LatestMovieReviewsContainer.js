import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tbmQMyenG3TAVF0eAC9lNJzdhAqIZghI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(response => response.results)
            .then(reviews => this.setState({ reviews }))
    }

    showLatest = () => 
        this.state.reviews
            ? this.state.reviews.map(review => {return <MovieReviews review={review}/> })
            : null


    render(){
        return(
            <div className='latest-movie-reviews'>
                <div className='review-list'>
                    <h1>Latest Reviews</h1>
                    {this.showLatest()}
                </div>
            </div>
        )
    }



}
