import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaInstagram, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_vvs3ww6',        // Your service ID
    'template_y1yxgap',       // Your template ID
    e.target,                 // The HTML form element
    '6oaC3t5t38BY3p84z'         // Your public EmailJS key
  ).then((result) => {
    console.log(result.text);
    alert('Message sent successfully!');
  }, (error) => {
    console.error(error.text);
    alert('Failed to send message. Please try again.');
  });

  e.target.reset();
};

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="heading">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <h1 className="email-text">
              Send me an email
            </h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
  <input
    type="text"
    name="user_name"
    id="name"
    placeholder="Your Name"
    value={formData.user_name}
    onChange={handleChange}
    required
  />

  <label htmlFor="email">Email</label>
  <input
    type="email"
    name="user_email"
    id="email"
    placeholder="Your Email"
    value={formData.user_email}
    onChange={handleChange}
    required
  />

  <label htmlFor="message">Message</label>
  <textarea
    name="message"
    id="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
  />
              <button type="submit" className="styled-button" >Send Email</button>
            </form>
          </div>
          <div className="social-links">
            <div className="social-item">
              <FaGithub size={24} color='white'/>
              <a href="https://github.com/Abdurrehman-Afzal-Warraich" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="social-item">
              <FaLinkedin size={24} color='#0077B5' />
              <a href="https://www.linkedin.com/in/abdurrehman-afzal-warraich-10064a1ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="social-item">
              <FaInstagram size={24} color="#E1306C" />
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="social-item">
              <FaFacebook size={24} color="#1877F2" />
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;