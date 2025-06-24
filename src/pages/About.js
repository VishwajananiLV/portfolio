// About.js

// import './About.css';
// import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
// import Navbar from '../components/Navbar';

// function About() {
//   return (
//     <>
//     <Navbar/>
//     <div className="about">
//     <div className="container">
//       <h1>About Me</h1>
//       <p>I'm Vishwajanani, a dedicated Front-End Developer with a background in Electronics and Communication Engineering.</p>
//       <p>After a career break to support my family, I upskilled in web development and built several hands-on projects.</p>

//     <div className="card">
//       <h2>Education</h2>
//       <p><strong>B.E. in Electronics and Communication Engineering</strong></p>
//       <p>Sethu Institute Of Technology, Virudhunagar (2016–2020)</p>
//       <p>CGPA: 8.63</p>
//       </div>

//     <div className="card">
//       <h2>Skills</h2>
//       <ul>
//         <li><FaReact color="#61DBFB" /> React.js</li>
//         <li><FaHtml5 color="#E34F26" /> HTML</li>
//         <li><FaCss3Alt color="#1572B6" /> CSS</li>
//         <li><FaJs color="#F0DB4F" /> JavaScript</li>
//         <li><FaGitAlt color="#F1502F" /> Git</li>
//       </ul>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default About;

import './About.css';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className="about py-5">
        <div className="container">
          <h1 className="text-center mb-4">About Me</h1>
          <p className="text-center">I'm Vishwajanani, a dedicated Front-End Developer with a background in Electronics and Communication Engineering.</p>
          <p className="text-center">After a career break to support my family, I upskilled in web development and built several hands-on projects.</p>

          <div className="card p-4 mb-4">
            <h2>Education</h2>
            <p><strong>B.E. in Electronics and Communication Engineering</strong></p>
            <p>Sethu Institute Of Technology, Virudhunagar (2016–2020)</p>
            <p>CGPA: 8.63</p>
          </div>

          <div className="card p-4">
            <h2>Skills</h2>
            <ul className="list-unstyled">
              <li className="mb-2"><FaReact color="#61DBFB" /> React.js</li>
              <li className="mb-2"><FaHtml5 color="#E34F26" /> HTML</li>
              <li className="mb-2"><FaCss3Alt color="#1572B6" /> CSS</li>
              <li className="mb-2"><FaJs color="#F0DB4F" /> JavaScript</li>
              <li className="mb-2"><FaGitAlt color="#F1502F" /> Git</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

