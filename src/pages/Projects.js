// Projects.js
// import React from 'react';
// import './Projects.css';
// import Navbar from '../components/Navbar';

// const Projects = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="projects">
//       <h2 className="section-title">My Projects</h2>
      
//       <div className="project-grid">
//         {/* Project 1: Portfolio Website */}
//         <div className="project-card">
//           <img src="/assets/portfolio 1.jpg" alt="Portfolio Website" className="project-image" />
//           <h3>Portfolio Website</h3>
//           <p>Designed and developed a responsive personal portfolio to showcase my skills and projects using ReactJS and GitHub Pages.</p>
//           <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">
//             <button className="project-btn">View Project</button>
//           </a>
//         </div>

//         {/* Project 2: E-commerce Product Page */}
//         <div className="project-card">
//           <img src="/assets/ecommercejpg.jpg" alt="E-commerce Product Page" className="project-image" />
//           <h3>E-commerce Product Page</h3>
//           <p>Built a fully responsive product page with JavaScript filtering functionality and optimized layout.</p>
//           <a href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer">
//             <button className="project-btn">View Project</button>
//           </a>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// };

// export default Projects;

import React from 'react';
import './Projects.css';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">My Projects</h2>

        <div className="row justify-content-center">
          {/* Project 1 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card h-100">
              <img src="/assets/portfolio 1.jpg" alt="Portfolio Website" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">
                  Designed and developed a responsive personal portfolio to showcase my skills and projects using ReactJS and GitHub Pages.
                </p>
                <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card h-100">
              <img src="/assets/ecommercejpg.jpg" alt="E-commerce Product Page" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">E-commerce Product Page</h5>
                <p className="card-text">
                  Built a fully responsive product page with JavaScript filtering functionality and optimized layout.
                </p>
                <a href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;



