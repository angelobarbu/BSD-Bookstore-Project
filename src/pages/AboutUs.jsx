// import React from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import AboutUsImage from '@/assets/AboutUs.png';

// const AboutUs = () => {
//   return (
//     <div
//       className="min-h-screen bg-black text-white flex flex-col justify-between"
//       style={{ backgroundImage: `url(${AboutUsImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center px-8 py-16 flex-grow">
//         <div className="w-full max-w-6xl bg-white bg-opacity-90 text-black rounded-lg shadow-md overflow-hidden flex flex-row">
//           {/* Left Content */}
//           <div className="w-1/3 p-8 flex items-center justify-center">
//             <h1 className="text-3xl font-bold">booksia</h1>
//           </div>

//           {/* Right Content */}
//           <div className="w-2/3 flex flex-col justify-between p-8">
//             <p className="text-lg mb-4 leading-relaxed">
//               Once upon a time, a group of book lovers set out to create a place
//               where stories come alive. At Booksia, we offer a carefully curated
//               collection for every reader, from timeless classics to modern
//               favorites.
//             </p>
//             <p className="text-lg leading-relaxed">
//               More than a bookstore, we’re a community celebrating the magic of
//               reading. Start your next adventure with us—because every story
//               begins with once upon a time.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer className="py-4" />
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsImage from '@/assets/AboutUs.png';

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-black text-black flex flex-col justify-between"
      style={{ backgroundImage: `url(${AboutUsImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-8 py-16 flex-grow relative">
      <div
          className="absolute inset-0 max-w-6xl mx-auto flex flex-row"
          style={{ top: '20%' }} // This adjusts the vertical position of the content
        >
          {/* Left Content */}
          <div className="w-1/2 flex flex-col justify-center items-start px-16" style={{ maxWidth: 'calc(80% - 30px)', paddingLeft: '5%', paddingRight: '5%' }}>
            <p className="text-[36px] leading-snug text-left break-words mb-1">
              Once upon a time, a group of book lovers set out to create a place
              where stories come alive. 
            </p> 
            <p className="text-[36px] leading-snug text-left break-words">
              At Booksia, we offer a carefully curated collection for every reader, from timeless classics to modern favorites.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-1/2 flex flex-col justify-center items-start px-16" style={{ maxWidth: 'calc(80% - 20px)', paddingLeft: '4.1%', paddingRight: '0%' }}>
            <p className="text-[36px] leading-snug text-left break-words">
              More than a bookstore, we’re a community celebrating the magic of
              reading. Start your next adventure with us—because every story
              begins with once upon a time.
            </p>
          </div>
        </div>
      </div>

     {/* Footer */}
     <Footer className="py-1" style={{ fontSize: '0.01rem' }} /> {/* Adjusted to make the footer smaller */}
    </div>
  );
};

export default AboutUs;
