const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav ul li a[data-section]');

const sections = {
  about: `
    <section id="about">
      <h3>About Me</h3>
      <p>I am a Computer Science student at Gopalganj Science and Technology University (GSTU), passionate about coding and problem-solving. I always give 100% effort in everything I work on. During my studies, I have gained experience with technologies like HTML5, CSS, Java, C++, and databases like MySQL and MongoDB. I’m eager to learn and improve my skills as a web developer. I love creating applications that solve real-world problems and make a positive impact on users.</p>
      <ul>
        <li><b>Languages:</b> Java, JavaScript, C, C++, HTML, CSS</li>
        <li><b>Databases:</b> MySQL, PostgreSQL, MongoDB</li>
        <li><b>Frameworks & Libraries:</b> Django, Node.js, Bootstrap</li>
        <li><b>Tools & Technologies:</b> Git, GitHub, Netlify</li>
      </ul>
      <div class="about-info">
        <div><p>Name</p><p>Mohammad Nimour Hossain</p></div>
        <div><p>Email</p><p>nkyfgk@gmail.com</p></div>
        <div><p>Date of Birth</p><p>27th November, 2001</p></div>
        <div><p>From</p><p>Narsingdi, Dhaka</p></div>
      </div>
      <p class="goal">I am seeking a challenging role in Software Engineering where I can apply my skills, gain valuable experience, and grow both professionally and personally.</p>
    </section>
  `,
  experience: `
    <section id="experience">
      <h3>Experience</h3>
      <p>I have been learning frontend development for one year. Below is a summary of my main skills and the technologies I use. To learn more about my work, please check out my online resume and project portfolio.</p>
      <div class="experience-boxes">
        <div class="experience-box">
          <img src="images/icons/js.png" alt="JavaScript Icon" />
          <h4>Vanilla JavaScript</h4>
          <p>Expertise in core JavaScript with ES6+ features, DOM manipulation, and event handling.</p>
        </div>
        <div class="experience-box">
          <img src="images/icons/react.png" alt="React Icon" />
          <h4>React</h4>
          <p>Building dynamic, responsive UIs with React, hooks, and component-based architecture.</p>
        </div>
        <div class="experience-box">
          <img src="images/icons/nodejs.png" alt="Node.js Icon" />
          <h4>Node.js</h4>
          <p>Backend development with Node.js, Express, REST APIs, and real-time applications.</p>
        </div>
        <div class="experience-box">
          <img src="images/icons/mongo.png" alt="MongoDB Icon" />
          <h4>MongoDB</h4>
          <p>Experienced with NoSQL databases like MongoDB for scalable, flexible data storage.</p>
        </div>
      </div>
      <div class="experience-card">
        <div class="company-info">
          <a href="https://esteemsoftbd.com/" target="_blank"><img src="asset/esteem.png" alt="Esteem Soft" /></a>
          <div>
            <a href="https://esteemsoftbd.com/" target="_blank">Esteem Soft Limited</a>
            <p>Industrial Attachment Trainee</p>
            <ul>
              <li>Learned and implemented CRUD operations using PHP and phpMyAdmin.</li>
              <li>Developed a Patient Management System to manage patient records and appointments efficiently.</li>
              <li>Gained practical experience in backend development and database administration.</li>
              <li>Improved system performance by optimizing code and database queries.</li>
              <li><b>Tools:</b> PHP, phpMyAdmin</li>
            </ul>
          </div>
        </div>
        <div class="duration">January 2025 - February 2025 | Bashundhara, Dhaka</div>
      </div>
    </section>
  `,
  projects: `
    <section id="projects">
      <h3>Projects</h3>
      <div class="project-item">
        <div class="project-content">
          <div>
            <h4>Simple Portfolio</h4>
            <p>A Simple Portfolio using HTML & CSS.</p>
            <a href="https://nimourhossain.github.io/Assignment-1/" target="_blank">View Online</a><br>
            <a href="https://github.com/nimourhossain/Assignment-1" target="_blank">View Source</a>
          </div>
          <img src="asset/p1.PNG" alt="Simple Portfolio" />
        </div>
      </div>
      <div class="project-item">
        <div class="project-content">
          <div>
            <h4>Fitness App</h4>
            <p>A Fitness web app based on HTML and CSS.</p>
            <a href="https://nimourhossain.github.io/Assignment-2/" target="_blank">View Online</a><br>
            <a href="https://github.com/nimourhossain/Assignment-2" target="_blank">View Source</a>
          </div>
          <img src="asset/p2.PNG" alt="Fitness App" />
        </div>
      </div>
      <div class="project-item">
        <div class="project-content">
          <div>
            <h4>Building Management App</h4>
            <p>A simple and extensible Building Management App based on HTML, CSS, and JS.</p>
            <a href="https://nimourhossain.github.io/Assingment-3/" target="_blank">View Online</a><br>
            <a href="https://github.com/nimourhossain/Assingment-3" target="_blank">View Source</a>
          </div>
          <img src="asset/p3.PNG" alt="Building Management App" />
        </div>
      </div>
      <div class="project-item">
        <div class="project-content">
          <div>
            <h4>Donate Bangladesh App</h4>
            <p>A Donate Bangladesh App using HTML, CSS, and JS.</p>
            <a href="https://nimourhossain.github.io/Assingment-5/" target="_blank">View Online</a>
          </div>
          <img src="asset/p4.PNG" alt="Donate Bangladesh App" />
        </div>
      </div>
    </section>
  `,
  skills: `
    <section id="skills">
      <h3>Skills</h3>
      <div class="skill-grid">
        <div><img src="asset/python.jpg" alt="Python" /><p>Python</p></div>
        <div><img src="asset/html.png" alt="HTML5" /><p>HTML5</p></div>
        <div><img src="asset/css.png" alt="CSS3" /><p>CSS3</p></div>
        <div><img src="asset/mysql.jpg" alt="MySQL" /><p>MySQL</p></div>
        <div><img src="asset/django.webp" alt="Django" /><p>Django</p></div>
        <div><img src="asset/git.png" alt="Git" /><p>Git</p></div>
      </div>
    </section>
  `,
  education: `
    <section id="education">
      <div class="education-item">
        <div class="education-content">
          <div>
            <h4>B.Sc. in CSE</h4>
            <p>Gopalganj Science and Technology University, Gopalganj</p>
            <p><strong>CGPA:</strong> 3.6/4.0 (Running)</p>
            <p><strong>Relevant Courses:</strong></p>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Software Engineering</li>
            </ul>
          </div>
          <img src="asset/i1.png" alt="GSTU Logo">
        </div>
      </div>
      <div class="education-item">
        <div class="education-content">
          <div>
            <h4>HSC (Science)</h4>
            <p>Narsingdi Govt. College, Narsingdi</p>
            <p><strong>GPA:</strong> 5.0/5.0</p>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
          </div>
          <img src="asset/i2.png" alt="Narsingdi Govt. College Logo">
        </div>
      </div>
      <div class="education-item">
        <div class="education-content">
          <div>
            <h4>SSC (Science)</h4>
            <p>Sekandardi A.M High School, Narsingdi</p>
            <p><strong>GPA:</strong> 5.0/5.0</p>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
            </ul>
          </div>
          <img src="asset/i3.jpeg" alt="Sekandardi School Logo">
        </div>
      </div>
    </section>
  `
};

function clearActive() {
  navLinks.forEach(link => link.classList.remove('active'));
}

function loadSection(section) {
  if (sections[section]) {
    content.innerHTML = sections[section];
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    loadSection(section);
    clearActive();
    link.classList.add('active');
  });
});

// Load default section
loadSection('about');
