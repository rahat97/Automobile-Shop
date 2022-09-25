import React from 'react'
import Serve from './Serve';

const Serves = () => {
    const serves = [
        {
            _id: 1,
            name: 'AUTO REPAIR',
            description: 'People in your area are searching for auto repairs. We can drive them straight to you.',
        },
        {
            _id: 2,
            name: 'AUTO BODY SHOP',
            description: "Drivers have a choice for their auto body repairs. Let's make sure they choose you",
        },
        {
            _id: 3,
            name: 'FLEET SERVICE',
            description: "Is your website getting you more business? Let's build a website that works for you",
        },
        {
            _id: 4,
            name: 'PERFORMANCE',
            description: "Will people searching for performance upgrades find you? We get you the business you want.",
        },
        {
            _id: 5,
            name: 'TIRES',
            description: "Tailored marketing gets your tire shop more business. We do tire shop marketing right.",
        },
        {
            _id: 6,
            name: 'TRANSMISSION',
            description: "Does your transmission shop show up on top of search results? We help you beat the competition.",
        },
    ];
  return (
    <div className='my-10 px-10'>
        <div className=''>
            <h3 className='py-5 text-brown text-2xl font-bold uppercase'>INDUSTRIES WE SERVE</h3>
            <p className='py-5 text-l'>Autoshop Solutions uses our digital marketing expertise to get your business found online and increase website conversions. The work we do online has real world results: more cars in your bays. If you want more customers coming to you for your most profitable services, we can help you get them.</p>
        </div>

        <div className='py-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                serves.map(serve =><Serve
                    key={serve._id}
                    serve={serve}
                ></Serve>)
            }
        </div>
    </div>
  )
}

export default Serves