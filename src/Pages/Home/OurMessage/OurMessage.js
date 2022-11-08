import React from 'react';
import img from '../../../assets/slide/imgabout.jpg'
import './OurMessage.css'

const OurMessage = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">

                <div className='circle-image w-3/5'>
                    <img src={img} alt="" className=' ' />
                </div>

                <div className='w-1/2'>
                    <br />
                    <h6 className='text-2xl my-5 text-cyan-200 font-bold'>WELCOME TO WHITE SMILE</h6>

                    <p className="py-3 text-xl">
                        I Create Beautiful Smiles!
                        White Smile is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders.

                        I offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment. New patients are welcomed with a complimentary oral health consultation. </p>
                </div>
            </div>
        </div>
    );
};

export default OurMessage;