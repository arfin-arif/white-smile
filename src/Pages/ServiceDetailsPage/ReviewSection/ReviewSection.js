import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewSection = ({ service }) => {
    const [reviews, setReviews] = useState([])
    const { title, image, price, _id, details, ratings, payment_options, } = service;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>What Others Say's About Us</h2>
            {
                reviews.map(review => <li>{review.message}</li>)
            }

            <Link to={`/reviews/${_id}`} className='btn btn-outline btn-info'>Add Your Review</Link>
        </div>
    );
};

export default ReviewSection;