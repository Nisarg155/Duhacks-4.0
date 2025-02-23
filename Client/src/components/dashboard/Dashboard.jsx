import React from 'react';
import './Dashboard.css';

const courses = [
  { title: "DAA - 2025 (E,F)", instructor: "Fatema Vhora", color: "dark", img: "https://via.placeholder.com/40" },
  { title: "Microprocessor Programming (MPI-2024-2025)", instructor: "Prof. Brijesha Rao", color: "orange", img: "https://via.placeholder.com/40" },
  { title: "CCN - EVEN 2024-2025", instructor: "Prof. Tanvi Goswami", color: "dark", img: "https://via.placeholder.com/40" },
  { title: "DBMS - Sem IV 2024-2025 (RAV and SHJ)", instructor: "Shweta Jambukia", color: "blue", img: "https://via.placeholder.com/40" },
  { title: "Uhv2425", instructor: "Reshma Lakhani", color: "blue", img: "https://via.placeholder.com/40" },
  { title: "Design of Digital Circuits (Division E & F)", instructor: "Reshma Lakhani", color: "orange", img: "https://via.placeholder.com/40" }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">📚 Classroom</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>To do</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <section className="course-cards">
          {courses.map((course, index) => (
            <div key={index} className={`card ${course.color}`}>
              <img src={course.img} alt="Instructor" className="instructor-img" />
              <div className="card-info">
                <div className="course-title">{course.title}</div>
                <div className="instructor">Instructor: {course.instructor}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
