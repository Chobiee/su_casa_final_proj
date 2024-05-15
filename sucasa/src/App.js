import React from 'react';
import './App.css';
import { Link } from 'react-scroll';

function App() {
  const webresort = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2,
      title: "main"
    },
    {
      id: 3,
      title: "about"
    },
    {
      id: 4,
      title: "contact"
    },
  ];

  const scrollToSection = (title) => {
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App"> 
      <header>
        <div>
          <nav>
            <h2>su casa</h2>
            <ul>
              {webresort.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.title}
                    smooth={true}
                    offset={-15} 
                    duration={500}
                    onClick={() => scrollToSection(item.title)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="content" id="home">
          <h1 className="content-header">Home</h1>
        </div>
        <div className="content" id="main">
          <h1 className="content-header">Main</h1>
        </div>
        <div className="content" id="about">
          <h1 className="content-header">About</h1>
        </div>
        <div className="content" id="contact">
          <h1 className="content-header">Contact</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
