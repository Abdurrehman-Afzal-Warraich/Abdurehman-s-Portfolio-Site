// import React from 'react';
// import { FaPython, FaDatabase, FaCode, FaTools, FaChartBar } from 'react-icons/fa';
// import { SiJavascript, SiR, SiHtml5, SiCss3, SiJupyter } from 'react-icons/si';
// import './styles/About.css';

import React from 'react';
import { FaCode, FaChartBar, FaTools, FaServer, FaRobot } from 'react-icons/fa';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        {/* About Me Card */}
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I'm Abdurrehman Afzal, a forward-thinking Software Engineer driven by innovation, with core skills in
            Python, Data Science, and Full-Stack Development. My projects bridge the gap between AI/ML and
            production-ready apps, whether it's deploying deep learning models, designing scalable systems, or Virtual 
            Coin-Based Payment System.
          </p>
        </div>

        {/* Skills Card */}
        <div className="skills-card">
          <h2>Skills</h2>

          {/* Programming Languages */}
          <div className="skill-category">
            <h3>
              <FaCode color="#f34b7d" /> Languages & Frameworks
            </h3>
            <p>Python, JavaScript, TypeScript, SQL, HTML/CSS</p>
          </div>

          {/* Backend & API Dev */}
          <div className="skill-category">
            <h3>
              <FaServer color="#4bc0c0" /> Backend & API Development
            </h3>
            <p>FastAPI, Flask, Node.js, Firebase (Auth/Firestore), REST APIs</p>
          </div>

          {/* Frontend Dev */}
          <div className="skill-category">
            <h3>
              <FaCode color="#36a2eb" /> Frontend Development
            </h3>
            <p>React Native, Next.js, Streamlit</p>
          </div>

          {/* AI & ML */}
          <div className="skill-category">
            <h3>
              <FaRobot color="#ff6384" /> AI & Machine Learning
            </h3>
            <p>Machine Learning, Natural Language Processing, Transformers (Hugging Face), LangChain</p>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-category">
            <h3>
              <FaTools color="#ff9f40" /> Tools & Platforms
            </h3>
            <p>Git, VS Code, Jupyter Notebook, Postman</p>
          </div>

          {/* Database & Blockchain */}
          <div className="skill-category">
            <h3>
              <FaChartBar color="#9966ff" /> Database
            </h3>
            <p>MongoDB, Firebase, PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
