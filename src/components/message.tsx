import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }

    return (
        <section className='py-5 md:flex md:flex-col md:justify-center md:px-20 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:px-40'>
            <div className='md:text-center lg:text-center'>
                <h1 className='pl-10 pb-3 text-lg font-bold md:text-4xl lg:text-6xl'>Connect With Me!</h1>
                <p className='px-10 pb-5 md:text-lg lg:text-xl lg:pb-10'>Have a question or want to know more? <br></br>Send me a message!</p>
            </div>
            <form className='mx-16 leading-8' onSubmit={handleSubmit}>
                <div className='lg:flex lg:justify-between lg:pb-10'>
                    <div className='flex flex-col pb-4 lg:w-[40%]'>
                        <label htmlFor="name">Your Name:</label>
                        <input
                            className='border-b-[1px]'
                            placeholder='Enter Your Name'
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col pb-4 lg:w-[40%]'>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            className='border-b-[1px]'
                            placeholder='Enter Your Email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col pb-4'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className='border-b-[1px] leading-5 pt-2 pb-8 overflow-hidden lg:pb-2'
                        placeholder='Hey there, love your site! Would love to connect with you and discuss further!'
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div className='flex justify-center w-full mt-5'>
                    <button className='border py-1 px-20' type="submit">Submit</button>
                </div>
            </form >
        </section>
    );
}

export default ContactForm;
