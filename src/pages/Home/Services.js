import React from 'react';
import car01 from '../../assets/images/car01.jpg';
import car02 from '../../assets/images/car07.jpg';
import car03 from '../../assets/images/car08.jpg';
import car04 from '../../assets/images/car04.jpg';
import car05 from '../../assets/images/car05.jpg';
import car06 from '../../assets/images/car06.jpg';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Ford',
            model: '2021 Ford F-150 XLT',
            price: "$90,970",
            description: 'This vehicle is subject to a Limited availability Regional Market Adjustment and will be subject to a price increase please see dealer website or call dealer for details.',
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
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
            img: car04
        },
        {
            _id: 5,
            name: 'Marcedes',
            model: 'Marcedes Benz Q',
            price: "$66,645",
            description: 'Sale Price Sale Priced vehicles are one of each & subject to prior sale. The dealer advertised sale price does not include sales tax, title, accessories & license.',
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
    ];
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Some of Our Top Products</h3>
            </div>
            
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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