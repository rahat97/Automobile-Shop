import React from 'react';
import car01 from '../../assets/images/car01.jpg';
import car02 from '../../assets/images/car07.jpg';
import car03 from '../../assets/images/car08.jpg';
import car04 from '../../assets/images/car04.jpg';
import car05 from '../../assets/images/car05.jpg';
import car06 from '../../assets/images/car06.jpg';
import car07 from '../../assets/images/car07.jpg';
import car08 from '../../assets/images/car08.jpg';
import car001 from '../../assets/images/car001.jpg';
import car002 from '../../assets/images/car002.jpg';
import car003 from '../../assets/images/car003.jpg';
import car12 from '../../assets/images/tesla-y.jpg';
import car13 from '../../assets/images/tesla-s.jpg';
import car14 from '../../assets/images/tesla-s-2.jpg';
import car15 from '../../assets/images/tesla-x.jpg';
import car16 from '../../assets/images/tesla-x-2.jpg';
import car17 from '../../assets/images/tesla-m3.jpg';
import car18 from '../../assets/images/tesla-m3-2.jpg';

import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Ford',
            model: '2021 Ford F-150 XLT',
            price: "$90,970",
            description: 'Vehicle is subject to a Limited availability Regional Market Adjustment and will be subject to a price increase please see dealer website or call dealer for details.',
            img: car01
        },
        {
            _id: 2,
            name: 'Jeep',
            model: '2022 Jeep Grand Cherokee Overland',
            price: "$59,350",
            description: 'This vehicle is subject to a Limited availability Regional Market Adjustment and will be subject to a price increase please see dealer website or call dealer for details.',
            img: car02
        },
        {
            _id: 3,
            name: 'Honda',
            model: '2022 Honda Civic EX',
            price: "$26,645",
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car03
        },
        {
            _id: 4,
            name: 'Lamborgini',
            model: 'LG EX',
            price: "$46,645",
            description: 'advanced technology and unparalleled performance of the latest Tesla electric vehicle. The Star Vista is also the home of Tesla.',
            img: car04
        },
        {
            _id: 5,
            name: 'Marcedes',
            model: 'Marcedes Benz Q',
            price: "$66,645",
            description: 'Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car05
        },
        {
            _id: 6,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car06
        },
        {
            _id: 7,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car07
        },
        {
            _id: 8,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'One of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car08
        },
        {
            _id: 9,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car001
        },
        {
            _id: 10,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'Vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car002
        },
        {
            _id: 11,
            name: 'Audi',
            model: 'Audi Q8',
            price: "$76,645",
            description: 'The Star Vista from Sept 19 to Oct 2 to experience the advanced technology and unparalleled performance of the latest Tesla electric vehicle.',
            img: car003
        },
        {
            _id: 12,
            name: 'TESLA',
            model: 'Model Y',
            price: "$76,645",
            description: "Model Y is Tesla’s first mass market electric SUV with ultimate combination of technology, performance, safety and utility. It is the key milestone in the Tesla Master Plan to accelerate the world’s transition to sustainable energy.",
            img: car12
        },
        {
            _id: 13,
            name: 'TESLA',
            model: 'Model S',
            price: "$76,645",
            description: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.',
            img: car13
        },
        {
            _id: 14,
            name: 'TESLA',
            model: 'Model TS',
            price: "$76,645",
            description: "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
            img: car14
        },
        {
            _id: 15,
            name: 'TESLA',
            model: 'Model X',
            price: "$76,645",
            description: "Model X platforms unite powertrain and battery technologies for unrivaled performance. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.",
            img: car15
        },
        {
            _id: 16,
            name: 'TESLA',
            model: 'Model TX',
            price: "$76,645",
            description: "With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, architecture, can deliver instant torque at any speed.",
            img: car16
        },
        {
            _id: 17,
            name: 'TESLA',
            model: 'Model 3',
            price: "$76,645",
            description: 'Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.',
            img: car17
        },
        {
            _id: 18,
            name: 'TESLA',
            model: 'Model T3',
            price: "$76,645",
            description: 'The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.',
            img: car18
        },
    ];
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-blue-600 text-2xl font-bold uppercase'>Our Products</h3>
            </div>
            
            <div  className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
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

export default Services;