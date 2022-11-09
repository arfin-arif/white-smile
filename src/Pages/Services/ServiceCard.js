import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const { title, image, price, _id, details, ratings } = service;

    return (

        <div className="card w-full rounded-none glass">

            <div className='border-solid p-8 rounded'>
                <figure><img src={image} alt="car!" className='rounded' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 120)}....</p>
                    <div className="card-actions justify-between">
                        <h4 className='text-3xl'>${price}</h4>
                        <div className="text-yellow-300 flex  ">
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>
                            <FaRegStar></FaRegStar>

                        </div>

                    </div>
                    <Link to={`/services/${_id}`} className="btn btn-info">Read More!</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;