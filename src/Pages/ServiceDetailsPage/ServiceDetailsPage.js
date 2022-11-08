import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCreditCard, FaRegStar } from 'react-icons/fa';
import './ServiceDetailsPage.css'

const ServiceDetailsPage = () => {
    const service = useLoaderData();
    const { title, image, price, _id, details, ratings, payment_options, } = service;
    return (
        <div className="hero rounded my-20">
            <div className="hero-content flex-col lg:flex-row">

                <div className=' w-3/5'>
                    <img src={image} alt="" className='rounded-lg w-3/4 h-full shadow-2xl ' />
                </div>
                <div className='w-1/2'>
                    <h6 className='text-3xl my-5 text-cyan-300 font-bold'>{title}</h6>
                    <p className="py-3 text-xl">
                        {details}
                    </p>
                    <div className='flex  justify-between'>
                        <div className='ratings'>
                            <FaRegStar className='text-2xl  text-yellow-300'></FaRegStar>
                            <p className='text-2xl pl-2'>{ratings}</p>
                        </div>
                        <div className='relative'>
                            <FaCreditCard className='text-2xl text-blue-400 absolute flex right-20 top-1/4 '></FaCreditCard>
                            <p className='text-2xl pl-2'>{payment_options}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;