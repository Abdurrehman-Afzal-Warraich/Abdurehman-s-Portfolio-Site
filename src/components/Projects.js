import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './styles/Projects.css';
import hate from '../assets/images/hate.png';
import legal from '../assets/images/legal.png';
import agro from '../assets/images/agro.png';

const projects = [
  {
    title: "Real-time Hate Speech Detection on Social Media",
    description: "Fine-tuned DistilBERT on Twitter hate speech data, with Flask API for real-time sentence classification.",
    tech: ["Python", "Transformers", "Flask", "Scikit-learn", "Imbalanced-learn"],
    github: "https://github.com/yourusername/hate-speech-detection",
    live: null,
    keyHighlights: [
      "Trained DistilBERT on hate speech data using Hugging Face Transformers.",
      "Built and deployed a Flask API, tested endpoints via Postman.",
      "Improved F1-score with SMOTE for class imbalance."
    ],
    image: hate
  },
  {
    title: "Legal Document QA Bot",
    description: "A legal assistant bot using LangChain and ChromaDB for semantic search and question answering over PDFs.",
    tech: ["Python", "HuggingFace", "LangChain", "Streamlit"],
    github: "https://github.com/yourusername/legal-qa-bot",
    live: null,
    keyHighlights: [
      "Enabled PDF upload and embedding-based semantic search.",
      "Built with LangChain and ChromaDB for document intelligence.",
      "Deployed interactive frontend using Streamlit."
    ],
    image: legal
  },
  {
    title: "AgroBoost (Final Year Project)",
    description: "A React Native mobile app ecosystem for farmers and buyers — crop prediction, auctions, and AgroCoin integration.",
    tech: ["React Native", "FastAPI", "MongoDB", "Firebase", "Solidity"],
    github: "https://github.com/yourusername/agroboost-fyp",
    live: null,
    keyHighlights: [
      "Crop yield prediction with ML, Firebase, and FastAPI.",
      "Integrated auction module for transparent bidding.",
      "Blockchain-powered virtual coin system with Solidity smart contracts."
    ],
    image: agro
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-image" />
            <p>{selectedProject.description}</p>
            <ul className="project-tech-list">
              {selectedProject.tech.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {selectedProject.keyHighlights && (
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {selectedProject.keyHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
