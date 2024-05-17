// App.js
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage());
  const [name, setName] = useState();


  // Function to get the current page based on the hash in the URL
  function getCurrentPage() {
    const hash = window.location.hash.substr(1); // Get the hash without the #
    return hash || 'Home'; // Default to 'Home' if no hash is present
  }
 

  // Function to handle navigation to different pages
  function navigateTo(page) {
    window.location.hash = page;
    setCurrentPage(page);
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => navigateTo('Home')}>Home</li>
          <li onClick={() => navigateTo('About')}>About</li>
          <li onClick={() => navigateTo('Contact')}>Contact</li>
          <li onClick={() => navigateTo('NewPage')}>New Page</li> {/* New page link */}
        </ul>
      </nav>
      <div>
        {/* Render different components based on the current page */}
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'NewPage' && <NewPage />} {/*Render NewPage component */}
      </div>
    </div>
  );
}

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

function NewPage() {
  return <h1>This is a New Page</h1>;
}

export default App;
