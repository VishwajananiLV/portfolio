// Home.js

// import './Home.css';
// import Navbar from '../components/Navbar';

// function Home() {
//   return (
//     <>
//      <Navbar />
//     <div className="home-card">
//     <div className="home-container">
//       <h1>Hi, I'm Vishwajanani</h1>
//       <h2>Front-End Developer</h2>
//       <p>
//         I build responsive and interactive web applications using HTML, CSS, JavaScript, and React.
//         I focus on clean UI, reusable components, and seamless user experiences.
//       </p>

//       <div className="home-buttons">
//         <a href="/contact" className="home-btn">Let's Connect</a>
//         <a
//           href="/L V VISHWAJANANI RESUME.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="home-btn resume-btn"
//         >
//           View My Resume
//         </a>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Home;

import './Home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card p-4 home-card">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10">
              <h1 className="home-heading">Hi, I'm Vishwajanani</h1>
              <h2 className="home-subheading">Front-End Developer</h2>
              <p>
                I build responsive and interactive web applications using HTML, CSS,
                JavaScript, and React. I focus on clean UI, reusable components, and
                seamless user experiences.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                <a href="/contact" className="btn btn-primary">Let's Connect</a>
                <a
                  href="/L V VISHWAJANANI RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;



