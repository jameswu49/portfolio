import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u4ai4eb', 'template_llp4i36', form.current, 'WTYG-lZAifFRnGgJ4')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="py-5 md:flex md:flex-col md:justify-center md:px-20 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:px-96">
            <div className="md:text-center lg:text-center">
                <h1 className="pl-10 pb-3 text-lg font-bold md:text-4xl lg:text-6xl">Connect With Me!</h1>
                <p className="px-10 pb-5 md:text-lg lg:text-xl lg:pb-10">
                    Have a question or want to know more? <br></br>Send me a message!
                </p>
            </div>
            <form className="mx-16 leading-8" ref={form} onSubmit={sendEmail}>
                <div className="lg:flex lg:justify-between lg:pb-10">
                    <div className="flex flex-col pb-4 lg:w-[40%]">
                        <label htmlFor="name" className="mr-2 lg:text-xl lg:pb-2">
                            Your Name:
                        </label>
                        <input
                            className="border-b-[1px]"
                            placeholder="Enter Your Name"
                            type="text"
                            id="name"
                            name="from_name"
                            required
                        />
                    </div>
                    <div className="flex flex-col pb-4 lg:w-[40%]">
                        <label htmlFor="email" className="mr-2 lg:text-xl lg:pb-2">
                            Email Address:
                        </label>
                        <input
                            className="border-b-[1px]"
                            placeholder="Enter Your Email"
                            type="email"
                            id="email"
                            name="user_email"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col pb-4">
                    <label className='lg:text-xl lg:pb-2'>Message:</label>
                    <textarea
                        className="border-b-[1px] leading-5 pt-2 pb-8 overflow-hidden lg:pb-2"
                        placeholder="Hello there! Would love to connect with you and talk more!"
                        id="message"
                        name="message"
                        required
                    />
                </div>
                <div className="flex justify-center w-fit mt-5 relative submit mx-auto">
                    <input className="cursor-pointer border py-1 px-20" type="submit" value="Send" />
                </div>
            </form>
        </section>
    );
};
