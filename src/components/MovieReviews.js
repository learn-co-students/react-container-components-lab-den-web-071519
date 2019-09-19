// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    const review = props.review
    return (
        <div className='review'>
            <h1>Movie: {review.display_title}</h1>
            <h3>Review Title: {review.headline}</h3>
            <p>Published by {review.byline} on {review.publication_date}</p>
            <a href={review.link.url}>Click here for the article</a>
            {review.mpaa_rating ? <p>Rating: {review.mpaa_rating}</p> : null}
        </div>
    )
}

export default MovieReviews