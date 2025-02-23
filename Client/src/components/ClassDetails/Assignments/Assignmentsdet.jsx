import React from 'react';
import TitleDesc from '../titledesc/titledesc';
import './Assignmentsdet.css'

const Assignmentsdet = () => {
  // Sample data for students and their assignment submission status
  const students = [
    { name: "Alice Johnson", id: "S101", status: "On Time" },
    { name: "Bob Smith", id: "S102", status: "Deadline" },
    { name: "Charlie Brown", id: "S103", status: "Late" },
    { name: "David Lee", id: "S104", status: "Not Submitted" },
  ];

  return (
    <div className="assignments-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">📚 Classroom</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>To Do</li>
            <li>Materials</li>
            <li className="active">Assignments</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <TitleDesc />
        <h2 className="title">Assignments Submission</h2>

        {/* Grid Layout for Cards */}
        <div className="cards-container">
          {students.map((student, index) => (
            <div key={index} className={`card ${student.status.toLowerCase().replace(" ", "-")}`}>
              <div className="card-info">
                <p className="student-name">{student.name}</p>
                <p className="student-id">ID: {student.id}</p>
              </div>
              <span className="status">{student.status}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assignmentsdet;
