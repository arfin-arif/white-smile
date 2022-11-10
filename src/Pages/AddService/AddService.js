import { data } from 'autoprefixer';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value
        const payment_options = form.payment_options.value
        const image = form.image.value
        const ratings = form.ratings.value
        const details = form.details.value

        const service = {
            title,
            price,
            payment_options,
            image,
            ratings,
            details
        }

        fetch('https://white-smile-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added successfully ')
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }


    useTitle('Add Services')

    return (
        <div>
            <h3 className='text-3xl text-center mb-2'>Please Add Your Service  </h3>
            <form onSubmit={handleReviewSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <input required type="text" name='title' placeholder="Title" className="input input-bordered input-info w-full " />
                    <input required type="text" name='price' placeholder="price" className="input input-bordered input-info w-full " />
                    <input required type="text" name='payment_options' placeholder="payment_options" className="input input-bordered input-info w-full " />
                    <input required type="text" name='image' placeholder="imageURL" className="input input-bordered input-info w-full " />
                    <input required type="number" id="quantity" min="1" max="5" name='ratings' placeholder="Ratings" className="input input-bordered input-info w-full " />
                    <textarea required name='details' className="textarea textarea-bordered" placeholder="Details"></textarea>
                </div>

                <div className='text-center mt-5 mb-2'>
                    <input className='btn btn-info ' type="submit" value="Add Service" />
                    <ToastContainer></ToastContainer>
                </div>
            </form>

        </div>
    );
};

export default AddService;