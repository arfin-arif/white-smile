import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../../MyReviews/ReviewCard/ReviewCard';
import ReviewSectionCard from './ReviewSectionCard';

const ReviewSection = ({ service }) => {
    const [reviews, setReviews] = useState([])
    const { title, image, price, _id, details, ratings, payment_options, } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/service-review?serviceName=${title}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div >
            <div className='text-center'>

                <h2 className='text-5xl font-bold'>What Others Say's About Us</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5'>

                {
                    reviews.map(review => <ReviewSectionCard
                        ey={review._id}
                        review={review}></ReviewSectionCard>)
                }
            </div>


            <div className='text-center'>
                <Link to={`/reviews/${_id}`} className='btn mt-8 mb-2 btn-outline btn-info'>Add Your Review</Link>
            </div>
        </div>
    );
};

export default ReviewSection;