import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

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
        <div>
            {
                reviews.map(review => <li>{review.message}</li>)
            }
        </div>
    );
};

export default MyReviews;