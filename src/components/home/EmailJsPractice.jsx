import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailJsPractice = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oyei8h5', 'template_xcqq9rn', form.current, {
                publicKey: 'xXqwLEQi83kdIbXx_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <h2 className='font-bold text-3xl'>Email Js</h2>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}

export default EmailJsPractice