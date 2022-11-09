import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=andy.starit@gmail.com`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })


    }, [user?.email])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5'>
            {
                reviews.map(review => <ReviewCard key={review._id}
                    review={review}></ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;