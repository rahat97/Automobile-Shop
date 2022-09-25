import React from 'react'

const Review = ({review}) => {
  return (

    <div className="card lg:max-w-lg bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">

        <h2 className="card-title text-2xl text-white">{review.name}</h2>
        <h2 className="card-title">{review.model}</h2>

        <p>{review.description}</p>

        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
      </div>
    </div>    
  )
}

export default Review