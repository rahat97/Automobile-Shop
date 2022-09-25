import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Rahat Mojumder',
            model: 'Ford F-150 XLT',
            description: 'This vehicle is subject to a Limited availability.',
        },
        {
            _id: 2,
            name: 'Rakib Khan',
            model: 'Jeep Grand Cherokee Overland',
            description: 'This vehicle is a Regional Market Adjustment and will be subject to a price increase.',
        },
        {
            _id: 3,
            name: 'Piyas Rahman',
            model: 'Honda Civic EX',
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale.',
        },
        {
            _id: 4,
            name: 'Pihu Rahman',
            model: 'Lamborgini EX',
            description: 'The dealer advertised sale price does not include sales tax, title, accessories & license.',
        },
        {
            _id: 5,
            name: 'Sazid Khan',
            model: 'Marcedes Benz Q',
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale.',
        },
        {
            _id: 6,
            name: 'Prottasa Karim',
            model: 'Audi Q8',
            description: 'The dealer advertised sale price does not include sales tax, title, accessories & license.',
        },
    ];
  return (
    <div className='my-10 px-10'>
        <div className='text-center'>
            <h3 className='py-5 text-primary text-2xl font-bold uppercase'>Our Customers Review</h3>
        </div>

        <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    </div>
  )
}

export default Reviews