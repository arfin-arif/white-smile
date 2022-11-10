import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })


    }, [user?.email])

    const handleDelete = id => {
        const decision = window.confirm('Do You Want To Delete It?')
        if (decision) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {


                        toast.success('Successfully Deleted ')
                        const remaining = reviews.filter(order => order._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className=''>
            {reviews.length === 0 ? <h2 className='text-center text-xl mt-40 mb-40'>You Don't Have Any Reviews </h2> : <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5'>
                {
                    reviews.map(review => <ReviewCard key={review._id}
                        review={review}
                        handleDelete={handleDelete}></ReviewCard>)
                }
            </div>
            }
            {
                reviews.map(review => <ReviewCard key={review._id}
                    review={review}
                    handleDelete={handleDelete}></ReviewCard>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;