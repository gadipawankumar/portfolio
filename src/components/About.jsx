const About = () => {
    const skills = [
        { title: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind CSS"] },
        { title: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
        { title: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
        { title: "Design", items: ["UI/UX", "Prototyping", "Animation", "Responsive Design"] }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="badge">About Me</span>
                    <h2 className="section-title">Bridging creativity <br /> and engineering</h2>
                </div>

                <div className="about-content">
                    <div className="about-text glass-card">
                        <p>
                            I am a passionate developer who loves to create beautiful and functional websites.
                            With a strong background in computer science and a keen eye for design,
                            I strive to build applications that not only solve problems but also provide
                            an enjoyable user experience.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or sharing my knowledge with the community.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((category, index) => (
                            <div key={index} className="skill-card glass-card">
                                <h3>{category.title}</h3>
                                <div className="tags">
                                    {category.items.map((item, i) => (
                                        <span key={i} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-top: 1rem;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .about-text {
          padding: 2rem;
        }

        .about-text p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-card {
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          background: rgba(30, 41, 59, 0.9);
        }

        .skill-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          color: var(--color-text-muted);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
