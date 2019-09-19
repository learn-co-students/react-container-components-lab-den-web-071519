import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tbmQMyenG3TAVF0eAC9lNJzdhAqIZghI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
            .then(resp => resp.json())
            .then(response => response.results)
            .then(reviews => this.setState({ reviews }))
    }

    showSearched = () => this.state.reviews.map(review => {
            return <MovieReviews review={review} />
        })

 

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input name='searchTerm' placeholder='search by movie title...' value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button>Search</button>
                    {this.showSearched()}
                </form>
            </div>
        )
    }




}