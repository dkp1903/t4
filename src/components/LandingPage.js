// src/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-500 p-4 text-white">
        <ul className="flex justify-around">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="flex-1 flex items-center justify-center bg-gray-200 p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to EduTech+</h1>
          <p className="text-lg my-4">The future of learning, today.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </header>
      <section className="p-10 bg-white">
        <h2 className="text-3xl mb-6 text-center">Key Features</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Interactive Courses</h3>
            <p>Engage with high-quality educational material.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p>Monitor your learning path with detailed analytics.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Expert Instructors</h3>
            <p>Learn from industry leaders.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 p-4 text-white text-center">
        <div>© 2024 EduTech+. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default LandingPage;
