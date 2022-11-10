import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const review = useLoaderData();

    const [newReview, setNewReview] = useState({ review })
    const { user } = useContext(AuthContext)
    const { serviceName, userName, ratings, message, _id } = review

    const handleUpdateReview = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const ratings = form.ratings.value
        const message = form.review.value

        const review = {
            userName: name,
            email,
            ratings,
            message
        }

        event.preventDefault();
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Eidited  ');
                    form.reset();
                }
            })
    }

    return (
        <form onSubmit={handleUpdateReview}>
            <h2 className='text-center'> Please Update Your Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <input required type="text" name='name' placeholder="Name" defaultValue={userName} className="input input-bordered input-info w-full " />
                <input required type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-info w-full " />
                <input required type="number" id="quantity" min="1" max="5" defaultValue={ratings} name='ratings' placeholder="Ratings" className="input input-bordered input-info w-full " />
                <textarea required name='review' className="textarea textarea-bordered" defaultValue={message} placeholder="Your Review"></textarea>
            </div>

            <div className="text-center mt-5 mb-5">
                <input className='btn btn-info ' type="submit" value="Submit Review" />
            </div>
            <ToastContainer></ToastContainer>
        </form>
    );
};

export default UpdateReview;