import React, { useState } from 'react';
import heroImage from '../images/Photoroom-20250119_160556.png'; // Import hero image

function About() {
  const [showFullDetails, setShowFullDetails] = useState(false); // State to toggle full details

  const handleToggleDetails = () => {
    setShowFullDetails(!showFullDetails); // Toggle the visibility state
  };

  return (
    <div className="about">
      <div className="about-model">
        <img src={heroImage} alt="model" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <h3>
          I'm a Passionate <span style={{ color: '#000266' }}>Web Designer</span>
        </h3>
        <p>
          My name is Habtamu, and I am a dedicated Software Engineer with a passion
          for full-stack web development. I have been actively building my expertise
          in technologies like HTML, CSS, JavaScript, and React, along with database
          management using MySQL. Proficient in tools like Git/GitHub and Visual Studio Code.
        </p>
        {showFullDetails && (
          <p>
            I also have a keen interest in video editing and content creation.
             I have developed proficiency in using various tools such as Adobe Premiere Pro, CapCut, and Canva, 
             all of which I use to create and edit engaging content. While I’m still at a basic level with these tools,
              I’ve gained hands-on experience in areas like thumbnail design and video editing
            I thrive on solving problems and collaborating effectively. I am eager to bring my technical skills 
            and innovative mindset to real-world projects.
          </p>
        )}
        <button onClick={handleToggleDetails}>
          {showFullDetails ? 'Show Less Details' : 'View More Details'}
        </button>
      </div>
    </div>
  );
}

export default About;
