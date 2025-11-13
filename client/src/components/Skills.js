import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
