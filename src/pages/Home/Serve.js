import React from 'react'

const Serve = ({serve}) => {
  return (

    <div className="card lg:max-w-lg bg-gray-100 text-black-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black text-2xl text-white">{serve.name}</h2>
        <h2 className="card-title">{serve.model}</h2>        
        <p>{serve.description}</p>
      </div>
    </div>
  )
}

export default Serve