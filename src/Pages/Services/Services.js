import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    // to use title
    useTitle('Services')
    return (

        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-5'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>


    );
};

export default Services;