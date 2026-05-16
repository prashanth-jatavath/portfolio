import './App.css';

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>Prashanth Portfolio</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Prashanth</h1>

        <p>
          Full Stack Developer | B.Tech Student
        </p>

        <button>
          View Projects
        </button>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a passionate Full Stack Developer
          interested in building modern web
          applications using React.js and Node.js.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Interview Mentor</h3>
          <p>
            AI-powered technical interview
            preparation platform.
          </p>
        </div>

        <div className="project-card">
          <h3>Expert Booking System</h3>
          <p>
            Real-time expert session booking
            application.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>

        <input type="text" placeholder="Prashanth" />
        <input type="email" placeholder="24x01a05g8@nrcmec.org" />
        <textarea placeholder="give your best always"></textarea>

        <button>Send Message</button>
      </section>

    </div>
  );
}

export default App;