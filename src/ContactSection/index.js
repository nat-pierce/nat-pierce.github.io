import './ContactSection.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import ErrorIcon from '../Resources/Icons/error-icon.svg';
import CheckIcon from '../Resources/Icons/check-circle.svg';
import LoadingSpinner from './LoadingSpinner';

const EMAIL_TEMPLATE_ID = "template_ozf6jnf";
const EMAIL_USER_ID = "KaNB1C4vbBiDyef2s";

export default function ContactSection() {
    const [emailStatus, setEmailStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        setEmailStatus('SENDING');
    
        emailjs.sendForm('default_service', EMAIL_TEMPLATE_ID, e.target, EMAIL_USER_ID)
            .then((result) => {
                setEmailStatus('SENT');
            }, (error) => {
                setEmailStatus('ERROR');
            });
    }

    let contactContent;
    if (emailStatus === 'ERROR') {
        contactContent = (
            <div className='content-container'>
                <img src={ErrorIcon} alt='Error' />
                <div className='message'>Error. Unable to send.</div>
            </div>
        );
    } else if (emailStatus === 'SENT') {
        contactContent = (
            <div className='content-container'>
                <img src={CheckIcon} alt='Success' />
                <div className='message'>Sent! I'll be in touch.</div>
            </div>
        );
    } else if (emailStatus === 'SENDING') {
        contactContent = (
            <div className='content-container'>
                <LoadingSpinner />
                <div className='message'>Sending...</div>
            </div>
        );
    } else {
        contactContent = (
            <form className="contact-form" onSubmit={sendEmail}>
                <div className='top-row'>
                    <input className='name-input' placeholder='Name' type="text" name="user_name" />
                    <input placeholder='Email' type="email" name="user_email" />
                </div>
                <textarea placeholder='Message' name="message" rows={4} />
                <div className='button-container'>
                    <input type="submit" value='Send' className='send-button' />
                </div>
            </form>
        );
    }

    return (
        <div className='contact-section' id='contact-section'>
            <h1>Contact</h1>
            {contactContent}
        </div>
    )
}