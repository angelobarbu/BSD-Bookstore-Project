// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ResetBackground from '@/assets/ResetBackground.png'; // Replace with your actual background image path

// const ResetPassword = () => {
//   return (
//     <div
//       className="min-h-screen text-black flex flex-col justify-between relative"
//       style={{
//         backgroundImage: `url(${ResetBackground})`,
//         backgroundSize: 'cover', // Ensures the image stretches to cover the entire viewport
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex-grow relative">
//         {/* "Oh no!" Heading */}
//         <h1
//           className="absolute font-bold"
//           style={{
//             fontSize: '60px', // Font size for "Oh no!"
//             top: '25%', // Adjust top position
//             left: '32%', // Adjust left position
//           }}
//         >
//           Oh no!
//         </h1>

//         {/* Reset Password Prompt */}
//         <p
//           className="absolute text-justify"
//           style={{
//             fontSize: '36px', // Font size for prompt text
//             width: '40%', // Set a width to constrain text
//             top: '50%', // Adjust top position
//             left: '26%', // Adjust left position
//           }}
//         >
//           Reset your password now
//         </p>

//         {/* New Password Label */}
//         <label
//           htmlFor="new-password"
//           className="absolute"
//           style={{
//             fontSize: '36px', // Font size for label
//             top: '27%', // Adjust top position
//             right: '32%', // Adjust right position
//           }}
//         >
//           New password
//         </label>

//         {/* New Password Input */}
//         <input
//           id="new-password"
//           type="password"
//           className="absolute border-2 border-gray-400 rounded-md px-4 py-2"
//           style={{
//             fontSize: '18px', // Font size for input text
//             width: '25%', // Adjust width of input
//             top: '37%', // Adjust top position
//             right: '20%', // Adjust right position
//           }}
//           placeholder="Enter new password"
//         />

//         {/* Confirm Password Label */}
//         <label
//           htmlFor="confirm-password"
//           className="absolute"
//           style={{
//             fontSize: '36px', // Font size for label
//             top: '46%', // Adjust top position
//             right: '25.5%', // Adjust right position
//           }}
//         >
//           Retype new password
//         </label>

//         {/* Confirm Password Input */}
//         <input
//           id="confirm-password"
//           type="password"
//           className="absolute border-2 border-gray-400 rounded-md px-4 py-2"
//           style={{
//             fontSize: '18px', // Font size for input text
//             width: '25%', // Adjust width of input
//             top: '55%', // Adjust top position
//             right: '20%', // Adjust right position
//           }}
//           placeholder="Retype new password"
//         />

//         {/* Reset Button */}
//         <button
//           className="absolute bg-black text-white px-6 py-2 rounded-md"
//           style={{
//             fontSize: '18px', // Font size for button text
//             top: '65%', // Adjust top position
//             right: '31%', // Adjust right position
//           }}
//         >
//           Reset
//         </button>
//       </div>

//       {/* Footer */}
//       <Footer className="py-1" style={{ fontSize: '0.8rem' }} /> {/* Adjusted to make the footer smaller */}
//     </div>
//   );
// };

// export default ResetPassword;
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResetBackground from '@/assets/ResetBackground.png'; // Replace with your actual background image path

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false); // State for "New password"
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for "Retype new password"

  return (
    <div
      className="min-h-screen text-black flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${ResetBackground})`,
        backgroundSize: 'cover', // Ensures the image stretches to cover the entire viewport
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
            fontSize: '60px', // Font size for "Oh no!"
            top: '25%', // Adjust top position
            left: '32%', // Adjust left position
          }}
        >
          Oh no!
        </h1>

        {/* Reset Password Prompt */}
        <p
          className="absolute text-justify"
          style={{
            fontSize: '36px', // Font size for prompt text
            width: '40%', // Set a width to constrain text
            top: '50%', // Adjust top position
            left: '26%', // Adjust left position
          }}
        >
          Reset your password now
        </p>

        {/* New Password Label */}
        <label
          htmlFor="new-password"
          className="absolute"
          style={{
            fontSize: '36px', // Font size for label
            top: '27%', // Adjust top position
            right: '32%', // Adjust right position
          }}
        >
          New password
        </label>

        {/* New Password Input */}
        <input
          id="new-password"
          type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
          className="absolute border-2 border-gray-400 rounded-md px-4 py-2"
          style={{
            fontSize: '18px', // Font size for input text
            width: '23%', // Adjust width of input
            top: '37%', // Adjust top position
            right: '22%', // Adjust right position
          }}
          placeholder="Enter new password"
        />
        <button
          className="absolute text-sm text-black-500"
          style={{
            top: '38.3%', // Align with input field
            right: '19.3%', // Positioned next to the input field
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>

        {/* Confirm Password Label */}
        <label
          htmlFor="confirm-password"
          className="absolute"
          style={{
            fontSize: '36px', // Font size for label
            top: '46%', // Adjust top position
            right: '25.5%', // Adjust right position
          }}
        >
          Retype new password
        </label>

        {/* Confirm Password Input */}
        <input
          id="confirm-password"
          type={showConfirmPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
          className="absolute border-2 border-gray-400 rounded-md px-4 py-2"
          style={{
            fontSize: '18px', // Font size for input text
            width: '23%', // Adjust width of input
            top: '55%', // Adjust top position
            right: '22%', // Adjust right position
          }}
          placeholder="Retype new password"
        />
        <button
          className="absolute text-sm text-black-500"
          style={{
            top: '57%', // Align with input field
            right: '19.3%', // Positioned next to the input field
          }}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? 'Hide' : 'Show'}
        </button>

        {/* Reset Button */}
        <button
          className="absolute bg-black text-white px-6 py-2 rounded-md"
          style={{
            fontSize: '18px', // Font size for button text
            top: '65%', // Adjust top position
            right: '31%', // Adjust right position
          }}
        >
          Reset
        </button>
      </div>

      {/* Footer */}
      <Footer className="py-1" style={{ fontSize: '0.8rem' }} /> {/* Adjusted to make the footer smaller */}
    </div>
  );
};

export default ResetPassword;
