import Image from 'next/image';
const ReasonAptifyr = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 scroll-animation">
      <h1 className="font-poppins font-semibold text-4xl my-8 md:my-12 md:text-6xl">Why <span style={{ color: '#A131DC' }}>choose</span> Aptifyr</h1>
      <div className="flex flex-col xl:flex-row justify-center items-center w-[90%] md:space-x-2 space-y-2 xl:space-y-0">
        <div className="flex items-center justify-center flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <div style={{ background: 'linear-gradient(to bottom, #2A0D4E 0%, #22172F 100%)' }} className="w-full md:w-1/2 xl:w-1/4 text-white flex justify-center items-center flex-col p-6 text-left rounded-xl h-[49vh]">
            <Image src="/firstSec.png" alt="Reason 1" width={250} height={250} />
            <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left w-full py-2">Hands-On Learning</h2>
            <p className="font-poppins md:text-xl xl:text-[1rem]">Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
          <div className="hidden xl:flex w-1/2 flex-col justify-center items-center space-y-2 text-white h-[48vh]">
            <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full h-1/2 p-6 flex flex-row justify-center items-center rounded-xl">
              <div>
                <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left w-full pb-4">Real-World Skills</h2>
                <p className="font-poppins md:text-xl xl:text-[1rem]">Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.</p>
              </div>
              <div>
                <Image src="/secondSec.png" alt="Reason 2" width={350} height={350} />
              </div>
            </div>
            <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full h-1/2 p-6 flex flex-row-reverse justify-center items-center rounded-xl">
              <div className="ml-4">
                <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-right w-full pb-4">Vibrant Community</h2>
                <p className="font-poppins text-right w-full md:text-xl xl:text-[1rem]">Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.</p>
              </div>
              <div className="py-4">
                <Image src="/thirdSec.png" alt="Reason 3" width={400} height={400} />
              </div>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(to bottom, #5D1281 0%, #000000 100%)' }} className="w-full md:w-1/2 xl:w-1/4 text-white flex justify-center items-center flex-col p-6 text-left rounded-xl h-[49vh]">
            <Image src="/fourthSec.png" alt="Reason 1" width={175} height={200} />
            <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left w-full pb-2">Expert Mentorship</h2>
            <p className="font-poppins md:text-xl xl:text-[1rem]">Connect with industry leaders and professionals who provide guidance, insights, and mentorship, helping students navigate their career paths.
            </p>
          </div>
        </div>
        <div className="xl:hidden space-y-2 text-white">
          <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full h-1/2 p-4 flex flex-col-reverse md:flex-row justify-center items-center rounded-xl">
            <div className='p-4 xl:p-0'>
              <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left w-full pb-4">Real-World Skills</h2>
              <p className="font-poppins md:text-xl xl:text-[1rem]">Equip students with practical skills that go beyond textbooks, preparing them for real-world challenges and opportunities.</p>
            </div>
            <div>
              <Image src="/secondSec.png" alt="Reason 2" width={350} height={350} />
            </div>
          </div>
          <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full h-1/2 p-4 flex flex-col-reverse md:flex-row-reverse justify-center items-center rounded-xl">
            <div className="ml-4">
              <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left md:text-right w-full pb-4">Vibrant Community</h2>
              <p className="font-poppins text-left md:text-right w-full md:text-xl xl:text-[1rem]">Join a thriving community of like-minded peers, educators, and experts, fostering collaboration and a supportive learning environment.</p>
            </div>
            <div className="p-4">
              <Image src="/thirdSec.png" alt="Reason 3" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-2 justify-center items-center text-white">
        <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full xl:w-1/2 xl:h-[30vh] p-6 flex flex-col-reverse md:flex-row justify-center items-center rounded-xl">
          <div className="w-[120%]">
            <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left w-full pb-4 px-10 md:px-0">Customized Curriculum </h2>
            <p className="font-poppins text-left w-full md:text-xl xl:text-[1rem] px-10 md:px-0">Schools can integrate our tailored programs into their curriculum, enhancing the educational experience and meeting modern educational standards.</p>
          </div>
          <div className="p-4">
            <Image src="/fifthSec.png" alt="Reason 3" width={350} height={400} />
          </div>
        </div>
        <div style={{ background: 'linear-gradient(to right, #2A0D4E 0%, #22172F 100%)' }} className="w-full xl:w-1/2 xl:h-[30vh] p-6 flex flex-col-reverse md:flex-row-reverse justify-center items-center rounded-xl">
          <div className="ml-4 w-[95%]">
            <h2 className="font-poppins text-2xl md:text-3xl xl:text-2xl font-bold text-left md:text-right w-full pb-4 mt-4">Holistic Development</h2>
            <p className="font-poppins text-left md:text-right w-full md:text-xl xl:text-[1rem]"> Focus on the overall growth of students by nurturing creativity, critical thinking, and problem-solving 21st century skills that sets them apart from the competition ensuring a bright future and a competitive edge in any field.</p>
          </div>
          <div>
            <Image src="/sixthSec.png" alt="Reason 3" width={350} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonAptifyr;