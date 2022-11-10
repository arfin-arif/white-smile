import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const service = useLoaderData()
    const { title, image, price, _id, details, ratings, payment_options, } = service;
    const { user } = useContext(AuthContext)
    const { photoURL } = user;

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const ratings = form.ratings.value
        const message = form.review.value

        const review = {
            review_serviceId: _id,
            serviceName: title,
            userName: name,
            userProfile: photoURL,
            email,
            ratings,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Review Submitted Successfully')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <h3 className='text-3xl'>Please Submit Your Review for {title} </h3>
            <form onSubmit={handleReviewSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <input required type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full " />
                    <input required type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-info w-full " />
                    <input required type="number" id="quantity" min="1" max="5" name='ratings' placeholder="Ratings" className="input input-bordered input-info w-full " />
                    <textarea required name='review' className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                </div>

                <input className='btn btn-info' type="submit" value="Submit Review" />
            </form>

        </div>
    );
};

export default Reviews;
