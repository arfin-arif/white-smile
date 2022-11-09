import React from 'react';
import { FaStethoscope, FaSyringe, FaTeeth, FaWheelchair } from 'react-icons/fa';
import img from '../../../assets/slide/whyme.jpg'

const WhyMe = () => {
    return (
        <div className="hero rounded my-20 ">
            <div className="hero-content flex-col bg-cyan-50 lg:flex-row">


                <div className='w-1/2'>



                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-5'>
                        <div>
                            <div className='flex'>
                                <FaSyringe className='text-9xl pr-2'></FaSyringe>
                                <div>
                                    Dental Anxiety
                                    <p> We offer a range of services to help you overcome fear and finally enjoy good oral health.</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='flex'>
                                <FaTeeth className='text-9xl pr-2'></FaTeeth>
                                <div>
                                    Tooth Pain
                                    <p>Toothache can be caused by various problems. An examination can help to determine it. </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <FaStethoscope className='text-9xl pr-2'></FaStethoscope>
                                <div>
                                    Missing Teeth
                                    <p>We can restore your smile, as well as speaking & eating ability with advanced prosthetics. </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <FaWheelchair className='text-9xl pr-2'></FaWheelchair>
                                <div>
                                    Periodontal Disease
                                    <p> We offer a variety of periodontal treatments, customized for your specific health needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className=' w-3/5'>
                    <img src={img} alt="" className=' w-full' />
                </div>

            </div>
        </div>
    );
};

export default WhyMe;