import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import './stastics.css';
import TitleDesc from '../titledesc/titledesc';

const Stastics = () => {
  const percentageData = {
    labels: ['Exam 1', 'Exam 2', 'Exam 3'],
    datasets: [
      {
        label: 'Score',
        data: [85, 90, 78], // Example data, replace with actual scores
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const submissionData = {
    labels: ['On Time', 'Late', 'Missing'],
    datasets: [
      {
        label: 'Submissions',
        data: [12, 5, 2], // Example data, replace with actual submission counts
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      },
    ],
  };

  const percentageOptions = {
    cutoutPercentage: 70,
    responsive: true,
  };

  const submissionOptions = {
    responsive: true,
  };

  return (
    <div>
      {/* <TitleDesc title="Exam Scores" description="Percentage Calculator for Exams" /> */}
      <div className="chart-container">
        <Doughnut data={percentageData} options={percentageOptions} />
      </div>
      {/* <TitleDesc title="Submission Status" description="Submissions Done on Time, Late, and Missing" />
      <div className="chart-container">
        <Bar data={submissionData} options={submissionOptions} />
      </div> */}
    </div>
  );
};

export default Stastics;
