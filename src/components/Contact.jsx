import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState(null); // Track the status of form submission

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission logic
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted!', data);

    // Simulate successful submission
    setTimeout(() => {
      setFormStatus('success'); // Update status to success
      event.target.reset(); // Clear the form
    }, 1000);

    // Uncomment for error simulation
    // setTimeout(() => setFormStatus('error'), 1000);
  };

  return (
    <div className="contacts">
      <div className="contact cont">
        <h1 className="heading">
          <span>Contact</span> Me
        </h1>
        <div className="row">
          <div className="content">
            <h3 className="title">Contact Info</h3>
            <div className="info">
              <h3>
                <i className="fas fa-envelope"></i> kebedehabtamu743@gmail.com
              </h3>
              <h3>
                <i className="fas fa-phone"></i> +251955139440
              </h3>
              <h3>
                <i className="fas fa-envelope"></i> +0703184541
              </h3>
              <h3>
                <i className="fas fa-map-marker-alt"></i> Africa, Ethiopia...
              </h3>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" placeholder="Name" className="box" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Email" className="box" required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" placeholder="Subject" className="box" />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                cols="10"
                rows="10"
                className="box message"
                placeholder="Message"
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-btn">
              SEND <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

        {/* Feedback message */}
        {formStatus === 'success' && (
          <div className="feedback success">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {formStatus === 'error' && (
          <div className="feedback error">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
