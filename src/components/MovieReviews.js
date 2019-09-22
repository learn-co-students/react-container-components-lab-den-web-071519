import React from 'react'

export default function MovieReviews({ movie }) {
    return (
        <div className='review'>
            <img src={movie.multimedia.src} />
            <h1>{movie.display_title}</h1>
            <p>{movie.summary_short}</p>
        </div>
    )
}
