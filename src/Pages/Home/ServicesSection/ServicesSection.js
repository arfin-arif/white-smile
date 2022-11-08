import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = ({ service }) => {
    const { title, image, price, _id, details } = service;
    return (
        <div >

            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 100)}....</p>
                    <div className="card-actions justify-between">
                        <h3 className='text-3xl text-cyan-200'>${price}</h3>
                        <Link to={`/services/${_id}`} className="btn btn-info">Read More</Link>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ServicesSection;