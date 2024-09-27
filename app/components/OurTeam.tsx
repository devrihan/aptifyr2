// import Image from 'next/image';

// const OurTeam = () => {
//   return (
//     <div className="bg-black text-white py-8">
//       <div className='scroll-animation flex flex-col justify-center items-center'>
//       <h1 className="mb-12 md:text-5xl text-3xl w-full lg:w-[40%] text-center font-poppins font-semibold px-4">We are the  <span style={{ color: '#A131DC' }}>people</span> who make up Aptifyr</h1>
//       <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row justify-center items-center space-x-0 lg:space-x-12 px-4 sm:px-16 w-full lg:w-[90%]">
//       <div className="flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
//           <div className="flex flex-col justify-center items-start">
//             <Image src="/profile/Rihan.png" width={300} height={300} alt="Our Team 1" />
//             <h1 className="text-2xl font-poppins font-extrabold mt-2 w-[50%] md:w-full">Rihan Akhtar</h1>
//             <p className="font-poppins text-lg font-semibold text-[#A131DC]">Founder</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
//           <div className="flex flex-col justify-center items-start">
//             <Image src="/profile/Sanskar.png" width={300} height={300} alt="Our Team 1"/>
//             <h1 className="text-2xl font-poppins font-extrabold mt-2">Sanskar Agarwal</h1>
//             <p className="font-poppins text-lg font-semibold text-[#A131DC]">Co-Founder</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
//           <div className="flex flex-col justify-center items-start">
//             <Image src="/profile/Harshita.png" width={300} height={300} alt="Our Team 1" />
//             <h1 className="text-2xl font-poppins font-extrabold mt-2">Harshita Lalwani</h1>
//             <p className="font-poppins text-lg font-semibold text-[#A131DC]">Head of Product</p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
//           <div className="flex flex-col justify-center items-start">
//             <Image src="/profile/Tushar.png" width={300} height={300} alt="Our Team 1" />
//             <h1 className="text-2xl font-poppins font-extrabold mt-2 w-1/4 md:w-full">Tushar Kumar</h1>
//             <p className="font-poppins text-lg font-semibold text-[#A131DC]">Business Manager</p>
//           </div>
//         </div>
        

//       </div>
//     </div>
//     </div>
//   );
// };

// export default OurTeam;

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className='scroll-animation flex flex-col justify-center items-center'>
        <h1 className="mb-12 md:text-5xl text-3xl w-full lg:w-[40%] text-center font-poppins font-semibold px-4">We are the <span style={{ color: '#A131DC' }}>people</span> who make up Aptifyr</h1>
        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row justify-center items-center space-x-0 lg:space-x-12 px-4 sm:px-16 w-full lg:w-[90%]">
        
          {/* Team Member 1 */}
          <div className="team-member relative flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
            <div className="image-container group relative overflow-hidden">
              <Image src="/profile/Rihan.png" width={300} height={300} alt="Our Team 1" className="transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="linkedin-btn absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/sk-rihan-akhtar/" target="_blank" rel="noopener noreferrer" className="text-[#0e76a8] text-3xl"><FaLinkedin /></a>
              </div>
            </div>
            <h1 className="text-2xl font-poppins font-extrabold mt-2 w-[50%] md:w-full">Rihan Akhtar</h1>
            <p className="font-poppins text-lg font-semibold text-[#A131DC]">Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member relative flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
            <div className="image-container group relative overflow-hidden">
              <Image src="/profile/Sanskar.png" width={300} height={300} alt="Our Team 1" className="transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="linkedin-btn absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/sanskar-agrawal-in/" target="_blank" rel="noopener noreferrer" className="text-[#0e76a8] text-3xl"><FaLinkedin /></a>
              </div>
            </div>
            <h1 className="text-2xl font-poppins font-extrabold mt-2">Sanskar Agarwal</h1>
            <p className="font-poppins text-lg font-semibold text-[#A131DC]">Co-Founder</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member relative flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
            <div className="image-container group relative overflow-hidden">
              <Image src="/profile/Harshita.png" width={300} height={300} alt="Our Team 1" className="transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="linkedin-btn absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/harshitalalwani0212/" target="_blank" rel="noopener noreferrer" className="text-[#0e76a8] text-3xl"><FaLinkedin /></a>
              </div>
            </div>
            <h1 className="text-2xl font-poppins font-extrabold mt-2">Harshita Lalwani</h1>
            <p className="font-poppins text-lg font-semibold text-[#A131DC]">Head of Product</p>
          </div>

          {/* Team Member 4 */}
          <div className="team-member relative flex flex-col justify-center items-start w-full lg:w-full xl:w-1/4 mb-8 lg:mb-0">
            <div className="image-container group relative overflow-hidden">
              <Image src="/profile/Tushar.png" width={300} height={300} alt="Our Team 1" className="transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="linkedin-btn absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a href="https://www.linkedin.com/in/-tushar-kumar-/" target="_blank" rel="noopener noreferrer" className="text-[#0e76a8] text-3xl"><FaLinkedin /></a>
              </div>
            </div>
            <h1 className="text-2xl font-poppins font-extrabold mt-2 w-1/4 md:w-full">Tushar Kumar</h1>
            <p className="font-poppins text-lg font-semibold text-[#A131DC]">Business Manager</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurTeam;
