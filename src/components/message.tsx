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
        <section className='py-5 lg:h-screen'>
            <h1 className='text-center'>Connect With Me!</h1>
            <p>Have a question or want to know more? Send me a message!</p>
            <form className='mx-16 leading-8' onSubmit={handleSubmit}>
                <div>
                    <label className='flex flex-col' htmlFor="name">Your Name:</label>
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
                <div className='flex flex-col'>
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
                <div className='flex flex-col'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        className='border-b-[1px] leading-5 pt-2 pb-8 overflow-hidden'
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
