import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./assets/Css/contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7yk14r5", // replace with your EmailJS service ID
        "template_uekqzfc", // replace with your EmailJS template ID
        e.target,
        "DnZzNUIiI6EwTybqq" // replace with your EmailJS user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-container">
        {/* Left side - contact form */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right side - social links + info */}
        <div className="contact-social">
          <h3>Connect with Me</h3>

          {/* Email & Mobile */}
          <div className="contact-info animate-info">
            <a href="mailto:shubhamborate25@gmail.com">
              <p>
                <FaEnvelope /> shubhamborate25@gmail.com
              </p>
            </a>

            <p>
              <FaPhone /> +91-9834481034
            </p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/shubham-borate-4429771a3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shubhamborate25"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/shubham_borate_25/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
