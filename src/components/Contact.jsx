import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thanks for your message! This is a demo form.');
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="badge">Get in Touch</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-desc">
              Have a project in mind or just want to say hi?
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <a href="mailto:gadipawankumar@gmail.com">gadipawankumar@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="icon">📱</span>
                <a href="tel:+19178543386">+1 (917) 854-3386</a>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>New York, NY</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/gadipawankumar" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/pawan-kumar-758b6917b" className="social-link">LinkedIn</a>
              <a href="https://www.instagram.com/gpawan10/" className="social-link">Instagram</a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-desc {
          margin: 1.5rem 0 2rem;
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.05rem;
        }

        .contact-item .icon {
          font-size: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--color-primary);
        }

        .contact-form {
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--color-text);
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-primary);
          outline: none;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
