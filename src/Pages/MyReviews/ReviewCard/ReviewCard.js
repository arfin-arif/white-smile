import React from 'react';
import { FaEdit, FaRegStar, FaRegTrashAlt, FaUser } from 'react-icons/fa';

const ReviewCard = ({ review, handleDelete }) => {
    const { serviceName, userName, ratings, message, _id } = review


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}!</h2>
                <p>{message}</p>
                <div className="card-actions justify-between">
                    <div className='flex'>
                        <FaRegStar className='text-2xl'></FaRegStar>
                        <p className='pl-2 text-lg'>{ratings}</p>
                    </div>
                    <div className='flex'>
                        <FaUser className='text-2xl' ></FaUser>
                        <p className='pl-1 text-lg'>{userName}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <FaEdit className='text-xl mt-4'></FaEdit>
                    <FaRegTrashAlt onClick={() => handleDelete(_id)} className='text-xl mt-4'></FaRegTrashAlt>

                </div>

            </div>
        </div>
    );
};

export default ReviewCard;