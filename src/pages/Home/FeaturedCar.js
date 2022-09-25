import React from 'react';
import car001 from '../../assets/images/car001.jpg';
import car002 from '../../assets/images/car002.jpg';
import car003 from '../../assets/images/car003.jpg';
import Service from './Service';

const FeaturedCar = () => {
    const services = [
        {
            _id: 1,
            name: 'Ford',
            model: '2021 Ford F-150 XLT',
            price: "$90,970",
            description: 'This vehicle is subject to a Limited availability Regional Market Adjustment and will be subject to a price increase please see dealer website or call dealer for details.',
            img: car001
        },
        {
            _id: 2,
            name: 'Jeep',
            model: '2022 Jeep Grand Cherokee Overland',
            price: "$59,350",
            description: 'This vehicle is subject to a Limited availability Regional Market Adjustment and will be subject to a price increase please see dealer website or call dealer for details.',
            img: car002
        },
        {
            _id: 3,
            name: 'Honda',
            model: '2022 Honda Civic EX',
            price: "$26,645",
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car003
        },
        
    ];

  return (
    <div className='my-10'>
        <div className='text-center'>
            <h3 className='text-blue-500 text-2xl font-bold uppercase'>New Featured Products</h3>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
        </div>
    </div>
  );
};

export default FeaturedCar;