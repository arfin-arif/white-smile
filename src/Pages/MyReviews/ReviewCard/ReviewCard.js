import React from 'react';
import { FaRegStar, FaUser } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { serviceName, userName, ratings, message } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}!</h2>
                <p>{message}</p>
                <div className="card-actions justify-between">
                    <div className='flex'>
                        <FaRegStar className='text-3xl'></FaRegStar>
                        <p className='pl-2 text-2xl'>{ratings}</p>
                    </div>
                    <div className='flex'>
                        <FaUser className='text-3xl' ></FaUser>
                        <p className='pl-1 text-2xl'>{userName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;