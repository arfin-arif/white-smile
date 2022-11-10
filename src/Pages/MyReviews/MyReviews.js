import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';


const MyReviews = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOutUser();
                }
                return res.json();
            })
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




    useTitle('My Reviews')
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

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReviews;