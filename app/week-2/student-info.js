

import React from 'react';

const StudentInfo = () => {
  const yourName = 'Samardeep Singh'; 
  const githubRepositoryLink = 'https://github.com/SamarMahal/cprg306-assignments.git'; 

  return (
    <div>
      <h2>Your Name</h2>
      <p>{yourName}</p>
      
      <h2>GitHub Repository</h2>
      <p>
        <a href={githubRepositoryLink} target="_blank" rel="noopener noreferrer">
          {githubRepositoryLink}
        </a>
      </p>
    </div>
  );
};

export default StudentInfo;

