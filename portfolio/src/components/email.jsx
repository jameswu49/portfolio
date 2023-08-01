import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Email() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        emailjs
            .sendForm('service_u4ai4eb', 'template_llp4i36', form.current, 'WTYG-lZAifFRnGgJ4')
            .then((result) => {
                setTimeout(() => {
                    console.log(result.text);
                    e.target.reset()
                    setIsSubmitting(false)
                    setSent(true)
                }, 3000)
            })
            .catch((error) => {
                console.log(error.text);
                setIsSubmitting(false)
            });
    };

    useEffect(() => {
        if (sent) {
            const timeout = setTimeout(() => {
                setSent(false);
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [sent]);

    return (
        <section className="py-5 md:flex md:flex-col md:justify-center md:px-20 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:px-96">
            <div className={`modal w-1/4 text-center rounded-lg bg-green-400 transition ease-in translate-x-[50rem] delay-300 ${sent ? 'transition translate-x-[-1rem]' : ''}`}>
                Message Sent!
            </div>
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
                <div className={`flex justify-center w-fit mt-5 relative mx-auto ${!isSubmitting ? 'submit' : ''}`}>
                    {isSubmitting ? "Submitting..." : <input disabled={isSubmitting} className={`cursor-pointer border py-1 px-20 ${sent ? 'hidden' : ''}`} type="submit" value="Send   &mdash;&mdash;&gt;" />}
                    {sent ? 'Message Sent! 🥳' : ''}
                </div>
            </form>
        </section>
    );
};