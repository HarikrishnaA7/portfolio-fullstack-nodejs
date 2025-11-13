import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Full-Stack Developer</h3>
            <p>
              Hi! I'm a passionate full-stack developer with expertise in building modern web applications.
              I specialize in React.js for frontend development and Node.js/Express.js for backend solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I create seamless,
              user-friendly applications that solve real-world problems. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web development.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">20+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-text">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
