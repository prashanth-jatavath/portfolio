import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Prashanth Portfolio</h2>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Prashanth</h1>

          <h3>
            Full Stack Developer | B.Tech Student
          </h3>

          <p>
            Passionate about building modern web applications using
            React.js, Node.js and MongoDB.
          </p>

          <div className="hero-buttons">
            
            <a
              href="https://github.com/prashanth-jatavath"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech student interested in Full Stack Development,
          Web Technologies and Problem Solving.
        </p>

        <p>
          I enjoy building real-world projects and learning modern
          technologies.
        </p>

        <p>
          My goal is to become a skilled Software Developer and work
          on impactful projects.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">C</div>
          <div className="skill-card">Java</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Smart Crime Reporting System</h3>

            <p>
              A full-stack web application for reporting and managing
              crime complaints digitally.
            </p>
          </div>

          <div className="project-card">
            <h3>Interview Mentor</h3>

            <p>
              Technical interview preparation platform with guidance,
              resources and preparation support.
            </p>
          </div>

          <div className="project-card">
            <h3>Real-Time Booking System</h3>

            <p>
              Booking platform with real-time session scheduling and
              management.
            </p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio built using React.js showcasing skills,
              projects and contact details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <p>Email: jatavathprashanthnaik@gmail.com</p>

          <p>
            GitHub:
            <a
              href="https://github.com/prashanth-jatavath"
              target="_blank"
              rel="noreferrer"
            >
              github.com/prashanth-jatavath
            </a>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://linkedin.com/in/prashanth-jatavath"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/prashanth-jatavath
            </a>
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Prashanth_JP" />

          <input type="email" placeholder="jatavathprashanthnaik@gmail.com" />

          <textarea
            placeholder="Consistency and Hardworking"
            rows="5"
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;