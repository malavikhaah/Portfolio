import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiUser, FiFolder, FiCode, FiAward, FiMail,
  FiDownload, FiGithub, FiLinkedin, FiBriefcase, FiBookOpen,
  FiPenTool, FiMessageCircle, FiGlobe, FiFileText, FiSun, FiMoon
} from 'react-icons/fi';
import { SiGmail, SiWhatsapp, SiJavascript, SiFlutter, SiMysql, SiFirebase, SiFigma, SiGithub, SiPostman, SiIntellijidea, SiAndroidstudio } from 'react-icons/si';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: 'Java', icon: <FaJava color="#5382a1" /> },
      { name: 'Python', icon: <FaPython color="#306998" /> },
      { name: 'C / C++', icon: <FiCode color="#a8b9cc" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> }
    ]
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
      { name: 'React.js', icon: <FaReact color="#61dafb" /> },
      { name: 'Flutter', icon: <SiFlutter color="#02569b" /> }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: 'SQL / MySQL', icon: <SiMysql color="#4479a1" /> },
      { name: 'Firebase', icon: <SiFirebase color="#ffca28" /> }
    ]
  },
  {
    category: "Tools & Software",
    items: [
      { name: 'Figma', icon: <SiFigma color="#f24e1e" /> },
      { name: 'VS Code', icon: <TbBrandVscode color="#007acc" /> },
      { name: 'GitHub', icon: <SiGithub color="#181717" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea color="#000000" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio color="#3ddc84" /> }
    ]
  },
  {
    category: "Core Competencies",
    items: [
      { name: 'UI/UX Design', icon: <FiPenTool color="#e83e8c" /> },
      { name: 'Communication', icon: <FiMessageCircle color="#20c997" /> },
      { name: 'English', icon: <FiGlobe color="#007bff" /> },
      { name: 'Malayalam', icon: <FiGlobe color="#6f42c1" /> }
    ]
  }
];

import frontendCert from './assets/certificates/introduction to frontend.pdf';
import pythonCert from './assets/certificates/python for datascience.pdf';
import dataVisCert from './assets/certificates/Data Visualisation.pdf';
import uxCert from './assets/certificates/Using AI Tools for UX Design.pdf';
import myResume from './assets/Resume-Malavika K C.pdf';

const certsData = [
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Coursera',
    file: frontendCert,
    date: '2024'
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
    file: pythonCert,
    date: '2023'
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'TATA',
    file: dataVisCert,
    date: '2024'
  },
  {
    title: 'Using AI Tools for UX Design',
    issuer: 'LinkedIn',
    file: uxCert,
    date: '2024'
  }
];

import './index.css';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 }
};

const navItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 }
};

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-nav">
          {['intro', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'certifications', 'contact'].map((id, idx) => (
            <motion.a
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-item ${activeSection === id ? 'active' : ''}`}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {id === 'intro' && <FiHome />}
              {id === 'about' && <FiUser />}
              {id === 'experience' && <FiBriefcase />}
              {id === 'education' && <FiBookOpen />}
              {id === 'projects' && <FiFolder />}
              {id === 'skills' && <FiCode />}
              {id === 'achievements' && <FiAward />}
              {id === 'certifications' && <FiFileText />}
              {id === 'contact' && <FiMail />}
              <span style={{ textTransform: 'capitalize' }}>{id}</span>
            </motion.a>
          ))}

          <motion.button
            className="theme-toggle-btn"
            onClick={() => setIsDarkMode(!isDarkMode)}
            variants={navItemVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-dark)', fontSize: '1.2rem',
              display: 'flex', alignItems: 'center', marginLeft: '1rem'
            }}
            title="Toggle Dark/Light Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="main-content">

        {/* Intro Section */}
        <motion.section
          id="intro"
          className="hero-section section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              Malavika K C
            </motion.h1>

            <motion.div className="social-pills" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              {[
                { href: "https://linkedin.com/in/malavikakc", icon: <FiLinkedin />, text: "LinkedIn" },
                { href: "https://github.com/malavikhaah", icon: <FiGithub />, text: "GitHub" },
                { href: "mailto:malavikakc26@gmail.com", icon: <FiMail />, text: "Email" },
                { href: myResume, download: "Malavika_KC_Resume.pdf", icon: <FiDownload />, text: "Resume" }
              ].map((pill, i) => (
                <motion.a
                  key={i}
                  href={pill.href}
                  download={pill.download}
                  className="pill-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverScale}
                  whileTap={{ scale: 0.95 }}
                >
                  {pill.icon} {pill.text}
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="designation" variants={itemVariants}>Full-Stack Developer &bull; UI/UX Designer</motion.div>

            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button className="btn-primary" onClick={() => scrollTo('projects')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Projects
              </motion.button>
              <motion.button className="btn-secondary" onClick={() => scrollTo('contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="profile-img-container"
            variants={itemVariants}
          >
            <div style={{ position: 'relative' }}>
              <img src="/profile.jpeg" alt="Malavika K C" className="profile-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; e.target.onerror = null; }} />

              <motion.div
                className="floating-status-pill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <span className="status-dot-green"></span>
                <span className="status-text">Open to vibes & collabs</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>My journey as a developer and designer</motion.p>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '2.5rem' }}>
            <motion.div className="about-content" variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
              <p style={{ margin: 0 }}>
                I am a <strong>developer at heart</strong>, but I have a profound love for designing intuitive and beautiful digital experiences. UI/UX design is more than just making apps look good—it is about crafting a journey that feels natural, accessible, and delightful to the user.
              </p>
              <p style={{ margin: 0 }}>
                In my role as a <strong style={{ color: 'var(--accent-color)' }}>Creative Lead</strong>, I channel this passion by shaping consistent brand identities and directing visual strategies. I believe that the best software bridges seamless functionality with striking aesthetics. By blending full-stack development with a strong design sensibility, I aim to build platforms that aren't just powerful under the hood, but also truly enjoyable to use.
              </p>
            </motion.div>

            <motion.div className="about-highlights" variants={sectionVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div className="highlight-card" variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '10px', display: 'flex' }}>
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ fontSize: '1.8rem', color: 'var(--accent-color)', display: 'inline-block' }}><FiCode /></motion.span>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-dark)', fontSize: '1.15rem' }}>Backend & Frontend</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.5' }}>Building robust architectures with Java and Spring Boot, paired with dynamic React and Flutter interfaces.</p>
                </div>
              </motion.div>

              <motion.div className="highlight-card" variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(232, 62, 140, 0.1)', borderRadius: '10px', display: 'flex' }}>
                  <motion.span animate={{ rotate: [0, -10, 10, -10, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ fontSize: '1.8rem', color: '#e83e8c', display: 'inline-block' }}><FiPenTool /></motion.span>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-dark)', fontSize: '1.15rem' }}>UI & UX Strategy</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: '1.5' }}>Translating complex requirements into accessible, pixel-perfect Figma designs, prioritizing user satisfaction.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Experience</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>My professional journey</motion.p>

          <div className="timeline">
            <motion.div className="timeline-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <div className="timeline-dot"></div>
              <div className="experience-card timeline-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Java Developer Intern</div>
                    <div className="exp-company">Infosys Springboard</div>
                  </div>
                  <div className="exp-date">Feb 2026 - Current</div>
                </div>
                <p className="exp-details" style={{ marginTop: '0.5rem', marginLeft: 0 }}>
                  Completed comprehensive training in full-stack web development through the Infosys Springboard platform. Gained hands-on experience by building a web-based E-Waste Collection and Management System, where I developed user authentication, request submission, and admin management features using React.js, Spring Boot, and MySQL with robust JWT authentication.
                </p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <div className="timeline-dot"></div>
              <div className="experience-card timeline-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Creative Lead</div>
                    <div className="exp-company">mulearn GECI</div>
                  </div>
                  <div className="exp-date">Jan 2026 - Current</div>
                </div>
                <p className="exp-details" style={{ marginTop: '0.5rem', marginLeft: 0 }}>
                  Directed creative strategy and managed a team to deliver high-quality visual content. Designed impactful promotional materials that successfully increased student participation and visibility, while building and maintaining a consistent brand identity across various events and digital platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Education</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>My academic background</motion.p>

          <div className="timeline">
            <motion.div className="timeline-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <div className="timeline-dot"></div>
              <div className="experience-card timeline-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Bachelor of Technology &bull; Information Technology</div>
                    <div className="exp-company">Government Engineering College Idukki</div>
                  </div>
                  <div className="exp-date">2023 - 2027</div>
                </div>
                <p className="exp-details" style={{ marginTop: '0.5rem', marginLeft: 0 }}>
                  Pursuing under APJ Abdul Kalam Technological University (KTU) with a current CGPA of 8.43.
                </p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" variants={itemVariants} whileHover={{ x: 10 }}>
              <div className="timeline-dot"></div>
              <div className="experience-card timeline-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Higher Secondary Education</div>
                    <div className="exp-company">Mambaram Higher Secondary School</div>
                  </div>
                  <div className="exp-date">2020 - 2022</div>
                </div>
                <p className="exp-details" style={{ marginTop: '0.5rem', marginLeft: 0 }}>
                  Completed under the Kerala Board of Public Examination.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Projects</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>Recent works and applications I've built</motion.p>

          <motion.div className="projects-grid" variants={sectionVariants}>
            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="project-title">Campusly - Event Management System</div>
              <div className="project-date">2026</div>
              <p className="project-desc">
                A community-focused project designed to make college activities more accessible.
                Serves as a centralized hub for event discovery, secure registrations, and resource access,
                streamlining faculty approvals and supporting a connected campus environment.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Firebase</span>
              </div>
            </motion.div>

            <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="project-title">E-Waste Management System</div>
              <div className="project-date">2026</div>
              <p className="project-desc">
                A modern web application responsive designed to streamline tracking, disposal, and recycling of electronic waste.
                Features a clean, intuitive interface empowering users to schedule pickups and monitor recycling progress.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Spring Boot</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Skills & Technologies</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>The tools and technologies I use to bring ideas to life</motion.p>

          <div className="skills-categories">
            {skillsData.map((section, idx) => (
              <motion.div
                key={idx}
                className="skills-section"
                style={{ marginBottom: '4rem' }}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h3 variants={itemVariants} style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)', fontWeight: 700 }}>
                  {section.category}
                </motion.h3>
                <motion.div className="skills-grid" variants={sectionVariants}>
                  {section.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-card"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Achievements</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>Awards, honors, and notable milestones</motion.p>

          <motion.div className="experience-card" variants={itemVariants} whileHover={{ scale: 1.01 }}>
            <div className="exp-header">
              <div>
                <div className="exp-role">Winner, Exclusive Master Class</div>
                <div className="exp-company">Wadhwani Foundation, K-DISC & KKEM</div>
              </div>
              <div className="exp-date">Recent</div>
            </div>
            <p className="exp-details" style={{ marginTop: '0.5rem', marginLeft: 0 }}>
              Selected as a winner of the intensive Master Class organized by the Wadhwani Foundation in collaboration with K-DISC and KKEM. Recognized for outstanding performance and dedication.
            </p>
          </motion.div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          id="certifications"
          className="section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>Certifications</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>Professional growth and continuous learning</motion.p>

          <motion.div className="cert-grid" variants={sectionVariants}>
            {certsData.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="cert-viewer-container">
                  <object
                    data={cert.file + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                    type="application/pdf"
                    className="cert-preview"
                  >
                    <p>PDF cannot be displayed.</p>
                  </object>
                </div>
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta">
                    <span style={{ color: 'var(--accent-color)' }}>{cert.issuer}</span> &bull; {cert.date}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="section"
          style={{ paddingBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="contact-minimal-content">
            <p className="contact-thanks-text">
              Thanks for scrolling all the way down here. You clearly appreciate good design and solid code.
            </p>
            <p className="contact-vibes-text">
              I'm always open to discussing full-stack development, creative UI, or your next big project. If you have an idea in mind or just want to chat tech, let's connect!
            </p>

            <a href="mailto:malavikakc26@gmail.com" className="contact-email-large">
              malavikakc26@gmail.com
            </a>

            <div className="contact-action-buttons">
              <a href="https://wa.me/919961081209" target="_blank" rel="noopener noreferrer" className="btn-buy-coffee">
                Let's Chat
              </a>
              <a href="https://linkedin.com/in/malavikakc" target="_blank" rel="noopener noreferrer" className="btn-book-chat">
                Connect with me
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="minimal-footer">
          <p>&copy; 2026 Malavika K C. Handcrafted with pixels, coffee, and pure vibes.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
