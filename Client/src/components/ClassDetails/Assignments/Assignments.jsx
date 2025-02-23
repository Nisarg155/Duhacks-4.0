import React from 'react';
import TitleDesc from '../titledesc/titledesc';

const Assignments = () => {
  // Sample data for students and their assignment submission status
  const students = [
    { name: "Alice Johnson", id: "S101", status: "On Time" },
    { name: "Bob Smith", id: "S102", status: "Deadline" },
    { name: "Charlie Brown", id: "S103", status: "Late" },
    { name: "David Lee", id: "S104", status: "Not Submitted" },
  ];

  // Function to get Tailwind classes based on status
  const getStatusClass = (status) => {
    switch (status) {
      case "On Time":
        return "bg-green-500 text-white";
      case "Deadline":
        return "bg-yellow-500 text-black";
      case "Late":
        return "bg-red-500 text-white";
      case "Not Submitted":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-5">
        <div className="text-2xl font-bold text-center mb-5">📚 Classroom</div>
        <nav>
          <ul className="space-y-3">
            <li className="p-3 bg-gray-700 rounded-md text-center cursor-pointer hover:bg-gray-600 transition">Home</li>
            <li className="p-3 bg-gray-700 rounded-md text-center cursor-pointer hover:bg-gray-600 transition">To Do</li>
            <li className="p-3 bg-gray-700 rounded-md text-center cursor-pointer hover:bg-gray-600 transition">Materials</li>
            <li className="p-3 bg-blue-600 rounded-md text-center cursor-pointer">Assignments</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <TitleDesc />
        <h2 className="text-2xl font-semibold mb-4">Assignments Submission</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">{student.name}</p>
                <p className="text-sm text-gray-600">ID: {student.id}</p>
              </div>
              <span className={`px-3 py-1 rounded-md font-semibold ${getStatusClass(student.status)}`}>
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assignments;
