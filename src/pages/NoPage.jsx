import React from 'react';
import Navbar from '@/components/Navbar'; // Ensure Navbar is properly imported
import NoPageBackground from '@/assets/NoPageBackground.png'; // Replace with your actual background image path

const NoPage = () => {
  return (
    <div
      className="min-h-screen text-black flex flex-col relative"
      style={{
        backgroundImage: `url(${NoPageBackground})`, // Background image for the page
        backgroundSize: 'cover', // Ensures the image covers the entire viewport
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative">
        {/* Left Side Illustration */}
        <div
          className="absolute"
          style={{
            backgroundImage: `url('/path-to-detective-image.png')`, // Replace with actual detective illustration path
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '30%',
            height: '60%',
            top: '20%', // Adjust position
            left: '10%', // Adjust position
          }}
        ></div>

        {/* 404 Text */}
        <h1
          className="absolute text-black font-bold"
          style={{
            fontSize: '100px',
            top: '30%', // Adjust position
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Center alignment
          }}
        >
          404
        </h1>

        {/* Description Text */}
        <p
          className="absolute text-black text-center"
          style={{
            fontSize: '20px',
            top: '45%', // Adjust position
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Center alignment
          }}
        >
          This page got lost between our racks.
          <br />
          Get back <a href="/" className="text-blue-500 underline">home</a>.
        </p>

        {/* Bottom Trail Illustration */}
        <div
          className="absolute"
          style={{
            backgroundImage: `url('/path-to-trail-image.png')`, // Replace with actual trail illustration path
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '80%',
            height: '20%',
            bottom: '5%', // Adjust position
            left: '10%', // Adjust position
          }}
        ></div>
      </div>
    </div>
  );
};

export default NoPage;
