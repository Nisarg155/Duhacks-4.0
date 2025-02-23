import React from 'react';
import './Material.css';
import TitleDesc from '../ClassDetails/titledesc/titledesc';

const materials = [
  { text: 'Introduction to DBMS', date: '31 Jan' },
  { text: 'ER Model and Relational Model', date: '16 Jan' },
  { text: 'SQL and Relational Algebra', date: '27 Dec 2024' },
  { text: 'Normalization and Functional Dependencies', date: '27 Dec 2024 (Edited 27 Dec 2024)' },
  { text: 'Transactions and Concurrency Control', date: '2 Dec 2024' },
];

const Material = () => {
  return (
    <div className="material-page">
      {/* Sidebar (Same as Dashboard) */}
      <aside className="sidebar">
        <div className="logo">📚 Classroom</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>To do</li>
            <li>Materials</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <TitleDesc />
        <div className="stream">
          {materials.map((material, index) => (
            <div className="post" key={index}>
              <div className="post-content">
                <p>Files Of DBMS : {material.text}</p>
                <span>{material.date}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Material;
