// Contact.js

// import React, { useState } from 'react';
// import './Contact.css'; // Optional: link to your CSS file
// import Navbar from '../components/Navbar';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Your message has been submitted!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="contact-card">
//     <div className="contact-container">
//       <h1>Contact Me</h1>

//       <div className="contact-info">
//         <p><strong>Email:</strong> your-email@example.com</p>
//         <p><strong>Phone:</strong> +91 9876543210</p>
//         <p><strong>Location:</strong> Tamil Nadu, India</p>
//       </div>

//       <h2>Send me a message</h2>
//       <p>If you have any questions or opportunities feel free to drop a message below!</p>

//       <form onSubmit={handleSubmit} className="contact-form">
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Message:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Contact;


// Contact.js

import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="contact-card container my-4">
        <div className="contact-container">
          <h1 className="text-center mb-4">Contact Me</h1>

          <div className="contact-info bg-white p-3 rounded shadow-sm mb-4">
            <p><strong>Email:</strong> vishwajananil55@gmail.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Location:</strong> Chennai - 603202</p>
          </div>

          <h2 className="mb-2">Send me a message</h2>
          <p>If you have any questions or opportunities feel free to drop a message below!</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-warning">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

