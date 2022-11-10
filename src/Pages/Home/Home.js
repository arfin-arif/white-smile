import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OurMessage from './OurMessage/OurMessage';
import ServicesSection from './ServicesSection/ServicesSection';
import Slider from './Slider/Slider';
import WhyMe from './WhyMe/WhyMe';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <OurMessage></OurMessage>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5'>
                {
                    services?.map(service => <ServicesSection
                        key={service._id}
                        service={service}></ServicesSection>)
                }
            </div>
            <div className='text-center mb-6'>
                <Link to='/services' className='btn btn-outline  btn-info'>See All Services</Link>
            </div>
            <WhyMe></WhyMe>
        </div>
    );
};

export default Home;