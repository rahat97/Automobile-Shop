import React from 'react'
import ReactPlayer from 'react-player';

const WatchReview = () => {
  return (
    <section className='flex px-12 py-10' style={{ backgroundImage: `url("https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/carreview/car-review1.webp")` }}>
      <div className='text-white font-bold'>
          <h3 className='text-2xl'>Watch videos from the number one car review channel in Bangladesh</h3>
          <ul className='py-5 px-10'>
            <li>➫ Expert Previews</li>
            <li>➫ Real User Reviews</li>
            <li>➫ Latest Offers & Updates</li>
          </ul>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <ReactPlayer width={480} height={240} controls url={"https://youtu.be/nV78JyODcz8"} />
      </div>
    </section>
  )
}

export default WatchReview;