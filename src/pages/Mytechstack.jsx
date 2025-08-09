import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt, FaGithub,
  FaJs, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase, SiFastapi, SiMongodb,
  SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiOpencv,
  SiVercel, SiSupabase
} from 'react-icons/si';

import './Mytechstack.css';

const techStack = {
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],
  'AI / ML': [
    { name: 'Python', icon: <FaPython /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'scikit-learn', icon: <SiScikitlearn /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
  ],
  Others: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Supabase', icon: <SiSupabase /> },
  ],
};

const Mytechstack = () => {
  return (
    <section id="techstack" className="techstack-section">
      <h2>🛠️ My Tech Stack</h2>
      <p className="techstack-subtitle">Technologies I work with across different domains</p>
      <div className="techstack-grid">
        {Object.entries(techStack).map(([category, tools]) => (
          <div className="tech-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {tools.map((tool) => (
                <li key={tool.name}>
                  <span className="tech-icon">{tool.icon}</span>
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mytechstack;
