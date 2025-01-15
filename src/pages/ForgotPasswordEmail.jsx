import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ForgotPasswordBackground from '@/assets/ResetBackground.png'; // Replace with your actual background image path

const ForgotPasswordEmail = () => {
  return (
    <div
      className="min-h-screen text-black flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${ForgotPasswordBackground})`,
        backgroundSize: '100% 100%', // Ensures the image stretches to cover the entire viewport
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative">
        {/* "Oh no!" Heading */}
        <h1
          className="absolute font-bold"
          style={{
            fontSize: '60px',
            top: '25%', // Adjust top position of the heading
            left: '32%', // Adjust left position of the heading
          }}
        >
          Oh no!
        </h1>

        {/* Description Text */}
        <p
          className="absolute text-justify"
          style={{
            fontSize: '36px',
            width: '26%', // Set a width to constrain the text
            top: '45%', // Adjust top position of the description
            left: '25%', // Adjust left position of the description
          }}
        >
          Did you forget your password? Don’t worry, we’re here to help. Please enter your email and follow the instructions.
        </p>

        {/* Email Label */}
        <label
          htmlFor="email"
          className="absolute"
          style={{
            fontSize: '36px',
            top: '45%', // Adjust top position of the label
            right: '31%', // Adjust right position of the label
            textAlign: 'center',
          }}
        >
          Email
        </label>

        {/* Email Input Field */}
        <input
          id="email"
          type="email"
          className="absolute border-2 border-gray-400 rounded-md px-4 py-2"
          style={{
            fontSize: '18px',
            width: '25%',
            top: '55%', // Adjust top position of the input field
            right: '20%', // Adjust right position of the input field
          }}
          placeholder="Enter your email"
        />

        {/* Send Button */}
        <button
          className="absolute bg-black text-white px-6 py-2 rounded-md"
          style={{
            fontSize: '18px',
            top: '63%', // Adjust top position of the button
            right: '31%', // Adjust right position of the button
          }}
        >
          Send
        </button>

        {/* "Didn't receive the email?" Text */}
        <p
          className="absolute text-sm"
          style={{
            fontSize: '14px',
            top: '72%', // Adjust top position of the text
            right: '29%', // Adjust right position of the text
            textAlign: 'center',
          }}
        >
          Didn’t receive the email?
        </p>

        {/* Resend Email Link */}
        <Link
          to="/resend-email"
          className="absolute text-blue-400"
          style={{
            fontSize: '14px',
            top: '77%', // Adjust top position of the link
            right: '31%', // Adjust right position of the link
            textAlign: 'center',
          }}
        >
          Resend Email
        </Link>
      </div>

      {/* Footer */}
      <Footer className="py-1" style={{ fontSize: '0.8rem' }} /> {/* Adjusted to make the footer smaller */}
    </div>
  );
};

export default ForgotPasswordEmail;
