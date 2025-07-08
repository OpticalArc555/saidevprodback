import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name.trim()) return 'Please enter your name.';
    if (!email.trim()) return 'Please enter your email.';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Please enter a valid email address.';
    if (!phone.trim()) return 'Please enter your phone number.';
    if (!/^\d{10}$/.test(phone)) return 'Please enter a valid 10-digit phone number.';
    if (!message.trim()) return 'Please enter your message.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    const error = validateForm();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://contact.prodchunca.in.net/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error('Server returned an unexpected response.');
      }

      if (response.ok && result.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(result?.message || '❌ Failed to send message: Server Error.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Could not send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            aria-label="Your Name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            aria-label="Your Email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            aria-label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            aria-label="Your Message"
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <div className={`status-message ${status.startsWith('✅') ? 'success' : 'error'}`}>
            {status}
          </div>
        )}
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Address:</strong> Registered office: At: Masnerwadi, Tq: Gangakhed, Dist: Parbhani - 431514.</p>
        <p><strong>Phone:</strong> +91 9920241110</p>
        <p><strong>Email:</strong> <a href="mailto:info.sairuraldevelopmenttrust@gmail.com">info.sairuraldevelopmenttrust@gmail.com</a></p>

        <h4>Find Us Here:</h4>
        <div className="map-container" aria-hidden="true">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9665676807153!2d76.84006459999999!3d18.9328739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfdd002adcbb01%3A0x17b425a5f1721e0e!2sSai%20Rural%20Development%20Trust!5e0!3m2!1sen!2sin!4v1725702299565!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
