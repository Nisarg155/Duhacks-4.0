import React from 'react';
import './Subinfo.css';
import TitleDesc from '../titledesc/titledesc';
import { FaFileAlt } from "react-icons/fa";

const Subinfo = () => {
  const materials = [
    { text: 'Introduction to DBMS', date: '31 Jan' },
    { text: 'ER Model and Relational Model', date: '16 Jan' },
    { text: 'SQL and Relational Algebra', date: '27 Dec 2024' },
    { text: 'Normalization and Functional Dependencies', date: '27 Dec 2024 (Edited 27 Dec 2024)' },
    { text: 'Transactions and Concurrency Control', date: '2 Dec 2024' },
  ];

  return (
    <div className="material-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">📚 Classroom</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>To do</li>
            <li className="active">Materials</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <TitleDesc />
        <div className="stream">
          {materials.map((material, index) => (
            <div className="post" key={index}>
              <FaFileAlt className="file-icon" />
              <div className="post-content">
                <p>Files Of DBMS : {material.text}</p>
                <span>{material.date}</span>
              </div>
              <div className="buttons">
                <button className="view-btn">View</button>
                <button className="download-btn">Download</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Subinfo;
