import React, { useContext } from 'react';
import { FaRegStar, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import noImage from "../../../assets/no-image.png";

const ReviewSectionCard = ({ review }) => {
    const { user } = useContext(AuthContext)
    const { serviceName, userName, ratings, message, userProfile } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="card-title ">{serviceName}!</h2>
                </div>
                <p>{message}</p>
                <div className="card-actions justify-between">
                    <div className='flex'>
                        <FaRegStar className='text-2xl text-yellow-300'></FaRegStar>
                        <p className='pl-2 text-xl'>{ratings}</p>
                    </div>
                    <div className=''>
                        {
                            review?.userProfile ?
                                <>

                                    <img className='rounded-full h-20' src={userProfile} alt="" />
                                </>
                                :
                                <>
                                    <img className=' rounded-full h-20' src={noImage} alt="" />


                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSectionCard;