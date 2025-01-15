// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ContactBackground from '@/assets/ContactBackground.png'; // Replace with your actual background image path

// const ContactUs = () => {
//   return (
//     <div
//       className="min-h-screen text-black flex flex-col justify-between relative"
//       style={{
//         backgroundImage: `url(${ContactBackground})`,
//         backgroundSize: 'cover', // Ensures the image stretches to cover the entire viewport
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex-grow relative">
//         {/* Left Side Text */}
//         <div
//           className="absolute"
//           style={{
//             fontSize: '36px', // Font size for main text
//             width: '27%', // Set a width to constrain text
//             top: '25%', // Adjust top position
//             left: '22%', // Adjust left position
//             textAlign: 'justify',
//           }}
//         >
//           <p>
//             We’d love to hear from you! Whether you have questions, need
//             recommendations, or just want to share your favorite story, we’re
//             here to help.
//           </p>
//         </div>

//         {/* Right Side Contact Information */}
//         <div
//           className="absolute"
//           style={{
//             fontSize: '36px', // Font size for Contact Us header
//             top: '25%', // Adjust top position
//             right: '23%', // Adjust right position
//           }}
//         >
//           <h1 className="font-bold mb-8">Contact us!</h1>
//           <p className="flex items-center mb-4">
//             📧 <span className="ml-4">booksia@example.com</span>
//           </p>
//           <p className="flex items-center mb-4">
//             📞 <span className="ml-4">0712345678</span>
//           </p>
//           <p className="flex items-center">
//             📍 <span className="ml-4">Bucharest, Romania</span>
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer className="py-4" />
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactBackground from '@/assets/ContactBackground.png'; // Replace with your actual background image path

const ContactUs = () => {
  return (
    <div
      className="min-h-screen text-black flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${ContactBackground})`,
        backgroundSize: 'cover', // Ensures the image stretches to cover the entire viewport
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative">
        {/* Left Side Text */}
        <div
          className="absolute"
          style={{
            fontSize: '36px', // Adjust font size for the left text
            width: '27%', // Adjust width of the left text box
            top: '25%', // Adjust vertical position
            left: '22%', // Adjust horizontal position
            textAlign: 'justify',
          }}
        >
          <p>
            We’d love to hear from you! Whether you have questions, need
            recommendations, or just want to share your favorite story, we’re
            here to help.
          </p>
        </div>

        {/* Right Side Contact Information */}
        <div
          className="absolute"
          style={{
            fontSize: '36px', // Adjust font size for the right text
            width: '30%', // Adjust width of the right text box
            top: '25%', // Adjust vertical position
            right: '17%', // Adjust horizontal position
            textAlign: 'left',
          }}
        >
          <h1 className="font-bold mb-8">Contact us!</h1>
          <p className="flex items-center mb-4">
            📧 <span className="ml-4">booksia@example.com</span>
          </p>
          <p className="flex items-center mb-4">
            📞 <span className="ml-4">0712345678</span>
          </p>
          <p className="flex items-center">
            📍 <span className="ml-4">Bucharest, Romania</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer
        className="absolute bottom-0 w-full"
        style={{
          padding: '1rem', // Adjust padding of the footer
          fontSize: '1rem', // Adjust font size of the footer text
        }}
      />
    </div>
  );
};

export default ContactUs;
