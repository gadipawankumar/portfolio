import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Pawan</span> <br />
            Creative Developer
          </h1>
          <p className="hero-description">
            I craft digital experiences with a focus on aesthetics and performance.
            Transforming ideas into reality through modern web technologies.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="image-container glass-card">
            <img src={heroImage} alt="Pawan" className="hero-image" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px; /* Navbar height */
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .helper-text {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-primary);
          border-radius: 20rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-outline {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-text);
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          z-index: 2;
          padding: 1rem;
          border-radius: var(--radius-md);
          max-width: 400px;
          width: 100%;
          transform: rotate(3deg);
          transition: transform 0.3s ease;
        }
        
        .image-container:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: calc(var(--radius-md) - 4px);
          display: block;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          z-index: 1;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          background: var(--color-primary);
          top: -20px;
          right: -20px;
          animation: float 10s infinite alternate;
        }

        .blob-2 {
          width: 250px;
          height: 250px;
          background: var(--color-secondary);
          bottom: -40px;
          left: -40px;
          animation: float 8s infinite alternate-reverse;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 40px); }
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
