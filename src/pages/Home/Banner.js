import React from 'react'

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://blog-images.carshop.co.uk/2019/11/doncasteranniversaryheader.png")` }}>
      <div className="hero-overlay bg-opacity-60">
      </div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* <h1 className="mb-8 text-5xl font-bold">Hello there</h1> */}
            <h1 className="mb-8 text-5xl text-light-800 font-bold">Welcome To <span className="text-amber-400">Automobile Shop</span></h1>
            <p className="font-bold mb-5">Your Dream Car, Near of your hands</p>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner