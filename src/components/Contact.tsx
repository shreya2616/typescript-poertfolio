import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Shreya Gupta" required /><br/>
        <input type="email" placeholder="shreyagupta0805@gmail.com" required /><br/>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
