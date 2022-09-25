import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import Serves from './Serves';
// import FeaturedCar from './FeaturedCar';
import Services from './Services';
import WatchReview from './WatchReview';


const Home = () => {
  return (
    <div className=''>
        <Banner></Banner>
        <Services></Services>
        {/* <FeaturedCar></FeaturedCar> */}
        <Reviews></Reviews>
        <WatchReview></WatchReview>
        <Serves></Serves>
    </div>
  )
}

export default Home