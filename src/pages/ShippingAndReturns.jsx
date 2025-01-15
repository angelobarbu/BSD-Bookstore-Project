// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import ShippingReturnsBackground from '@/assets/ShippingReturnsBackground.png'; // Replace with your actual background image path

// const ShippingAndReturns = () => {
//   return (
//     <div
//       className="min-h-screen text-black flex flex-col justify-between relative"
//       style={{
//         backgroundImage: `url(${ShippingReturnsBackground})`,
//         backgroundSize: 'cover', // Ensures the background image stretches to cover the entire viewport
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex-grow relative">
//         {/* Left Section - Shipping */}
//         <div
//           className="absolute"
//           style={{
//             fontSize: '36px', // Adjust font size for the Shipping header
//             width: '40%', // Adjust width of the text box
//             top: '25%', // Adjust vertical position
//             left: '15%', // Adjust horizontal position
//             textAlign: 'justify',
//           }}
//         >
//           <h1 className="font-bold mb-8">Shipping</h1>
//           <ul className="list-disc ml-8 text-[24px]">
//             <li>
//               Delivery Times: Orders are typically processed within 2 business days
//               and shipped via Sameday. Delivery times vary based on your location,
//               with most orders arriving within 3-5 days.
//             </li>
//             <li>
//               Shipping Rates: 15-20RON, FREE shipping over 200LEI.
//             </li>
//             <li>
//               Tracking: You’ll receive a tracking number once your order ships, so
//               you can follow its journey.
//             </li>
//           </ul>
//         </div>

//         {/* Right Section - Returns */}
//         <div
//           className="absolute"
//           style={{
//             fontSize: '36px', // Adjust font size for the Returns header
//             width: '40%', // Adjust width of the text box
//             top: '25%', // Adjust vertical position
//             right: '15%', // Adjust horizontal position
//             textAlign: 'justify',
//           }}
//         >
//           <h1 className="font-bold mb-8">Returns</h1>
//           <ul className="list-disc ml-8 text-[24px]">
//             <li>
//               Return Policy: Returns are accepted within 30 days of delivery for
//               a full refund or exchange. Items must be in their original condition.
//             </li>
//             <li>
//               How to Return: Contact us at <strong>booksia@example.com</strong> to
//               initiate a return. We’ll provide instructions and a return label if
//               applicable.
//             </li>
//             <li>
//               Refunds: Once we receive your return, we’ll process your refund
//               within 7 business days.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer className="py-4" />
//     </div>
//   );
// };

// export default ShippingAndReturns;
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShippingReturnsBackground from '@/assets/ShippingReturnsBackground.png'; // Replace with your actual background image path

const ShippingAndReturns = () => {
  return (
    <div
      className="min-h-screen text-black flex flex-col justify-between relative"
      style={{
        backgroundImage: `url(${ShippingReturnsBackground})`,
        backgroundSize: 'cover', // Ensures the background image stretches to cover the entire viewport
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow relative">
        {/* Left Section - Shipping */}
        <div>
          <h1
            className="absolute font-bold"
            style={{
              fontSize: '36px',
              top: '10%',
              left: '32%',
            }}
          >
            Shipping
          </h1>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '26%',
              left: '22%',
              textAlign: 'center',
              width: '28%',
            }}
          >
            • Delivery Times: Orders are typically processed within 2 business days
            and shipped via Sameday. Delivery times vary based on your location,
            with most orders arriving within 3-5 days.
          </p>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '54%',
              left: '22%',
              textAlign: 'center',
              width: '28%',
            }}
          >
            • Shipping Rates: 15-20RON, FREE shipping over 200LEI.
          </p>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '68%',
              left: '22%',
              textAlign: 'center',
              width: '28%',
            }}
          >
            • Tracking: You’ll receive a tracking number once your order ships, so
            you can follow its journey.
          </p>
        </div>

        {/* Right Section - Returns */}
        <div>
          <h1
            className="absolute font-bold"
            style={{
              fontSize: '36px',
              top: '10%',
              right: '32%',
            }}
          >
            Returns
          </h1>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '26%',
              right: '22%',
              textAlign: 'center',
              width: '25%',
            }}
          >
            • Return Policy: Returns are accepted within 30 days of delivery for a
            full refund or exchange. Items must be in their original condition.
          </p>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '50%',
              right: '22%',
              textAlign: 'center',
              width: '25%',
            }}
          >
            • How to Return: Contact us at <strong>booksia@example.com</strong> to
            initiate a return. We’ll provide instructions and a return label if
            applicable.
          </p>

          <p
            className="absolute"
            style={{
              fontSize: '24px',
              top: '74%',
              right: '22%',
              textAlign: 'center',
              width: '25%',
            }}
          >
            • Refunds: Once we receive your return, we’ll process your refund
            within 7 business days.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer className="py-4" />
    </div>
  );
};

export default ShippingAndReturns;
