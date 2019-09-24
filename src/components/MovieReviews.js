import React from 'react'

export default function MovieReviews(props) {
    
    const renderMovies = () => {
        return props.reviews.map((review) => {
            return <li>{review.display_title}</li>
        })
    }

    return (
        <div className="review-list">
            {renderMovies()}
        </div>
    )
}
