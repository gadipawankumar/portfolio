const Projects = () => {
  const projects = [
    {
      title: "Pharmacy App",
      description: "Cross-platform mobile application for pharmacy operations, enabling secure login and real-time prescription status tracking.",
      tags: ["React Native", "Firebase", "Healthcare", "Mobile App"],
      image: "linear-gradient(135deg, #22c1c3 0%, #fdbb2d 100%)",
      link: "#"
    },
    {
      title: "Food Delivery Platform",
      description: "End-to-end food delivery application with real-time order tracking, restaurant management, and seamless user experience.",
      tags: ["React Native", "Node.js", "MongoDB", "Express"],
      image: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
      link: "#"
    },
    {
      title: "Marketplace Pricing Intelligence",
      description: "Smart marketplace system that predicts future price drops based on wait time, group buying, and demand-driven ML models.",
      tags: ["React.js", "Python", "Machine Learning", "AWS"],
      image: "linear-gradient(135deg, #7f00ff 0%, #e100ff 100%)",
      link: "#"
    },
    {
      title: "Car Model Detection AI",
      description: "Computer vision system that accurately detects and classifies car models from images using deep learning pipelines.",
      tags: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
      image: "linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)",
      link: "#"
    },
    {
      title: "DeepMindScape",
      description: "Modern, responsive website built from Figma designs to showcase AI research, products, and technical storytelling.",
      tags: ["React.js", "UI/UX", "Responsive Design"],
      image: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      link: "#"
    },
    {
      title: "Outtake.ai – LLM Evaluation Infrastructure",
      description: "Production-grade infrastructure for evaluating, orchestrating, and improving large language models at scale.",
      tags: ["LLMs", "MLOps", "Python", "AWS"],
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "#"
    },
    {
      title: "Resume Parser & Hiring Launchpad",
      description: "Automated resume parsing and internal hiring platform that improved recruitment efficiency by 35%.",
      tags: ["Python", "NLP", "Django", "React"],
      image: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      link: "#"
    },
    {
      title: "Breast Cancer Prediction Model",
      description: "Interpretable ML model using TCGA-BRCA gene expression data to classify breast cancer cases with clinical relevance.",
      tags: ["Machine Learning", "Bioinformatics", "Python"],
      image: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
      link: "#"
    },
    {
      title: "Credit Risk Modeling System",
      description: "Python-based system for capturing credit risk sensitivities across multiple financial products.",
      tags: ["Risk Modeling", "Data Mining", "Python"],
      image: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
      link: "#"
    },
    {
      title: "AI Career & Mental Health Chatbots",
      description: "Generative AI-powered chatbots designed to assist with career transitions and mental health guidance.",
      tags: ["Generative AI", "NLP", "Flask", "GPT"],
      image: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)",
      link: "#"
    },

    // 🔐 CYBERSECURITY PROJECTS

    {
      title: "Firewall & Port Scan Analysis",
      description: "Network security assessment using firewall analysis and port scanning to identify exposed services and risks.",
      tags: ["Cybersecurity", "Nmap", "Network Security"],
      image: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
      link: "#"
    },
    {
      title: "Phishing Attack Simulation",
      description: "Simulated phishing campaigns and analyzed user behavior to strengthen organizational security awareness.",
      tags: ["Phishing", "Threat Analysis", "Cybersecurity"],
      image: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
      link: "#"
    },
    {
      title: "Password Security & Authentication",
      description: "Implemented strong password policies, encryption, and MFA to harden authentication systems.",
      tags: ["Authentication", "Encryption", "Security"],
      image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      link: "#"
    },
    {
      title: "Red Team Operations with Termux",
      description: "Hands-on penetration testing and ethical hacking exercises using Termux on mobile devices.",
      tags: ["Red Team", "Penetration Testing", "Termux"],
      image: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      link: "#"
    },
    {
      title: "Incident Response & Security Documentation",
      description: "Identified, documented, and responded to simulated security incidents following industry best practices.",
      tags: ["Incident Response", "SOC", "Cybersecurity"],
      image: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
      link: "#"
    },
    {
      title: "Vulnerability Assessment & Threat Research",
      description: "Performed vulnerability scanning and researched emerging threats to proactively secure systems.",
      tags: ["Vulnerability Assessment", "Threat Research"],
      image: "linear-gradient(135deg, #ff8008 0%, #ffc837 100%)",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image" style={{ background: project.image }}>
                <div className="overlay">
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }

          .project-card {
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
            border-color: rgba(99, 102, 241, 0.3);
          }

          .project-image {
            height: 200px;
            position: relative;
            overflow: hidden;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-card:hover .overlay {
            opacity: 1;
          }

          .project-info {
            padding: 1.5rem;
          }

          .project-info h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .project-info p {
            color: var(--color-text-muted);
            margin-bottom: 1rem;
            font-size: 0.95rem;
            line-height: 1.5;
          }
        `}</style>
    </section>
  );
};

export default Projects;
