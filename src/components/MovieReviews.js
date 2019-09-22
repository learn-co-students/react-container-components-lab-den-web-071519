import React from 'react'

const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

const Review = ({display_title, headline, byline, link, summary_short}) =>{

  return(
    <div key={headline} className="review">
    <header>
      <h2>{display_title}</h2>
      <a
        className="review-link"
        href={link.url}
      >
        {headline}
      </a>
      <br/>
      <span className="author">{byline}</span>
    </header>
    <blockquote>{summary_short}</blockquote>
    </div>
  )

}

export default MovieReviews
