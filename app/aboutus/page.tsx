import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col xl:flex-row bg-black text-white p-4 md:p-12 xl:pr-0 space-x-6 font-poppins xl:overflow-hidden">
        <div className="xl:w-1/2 flex justify-center items-start flex-col px-8">
          <h1 className="font-extrabold text-4xl md:text-6xl font-bebas">ABOUT US</h1>
          <p className="mt-8 text-lg md:text-2xl md:text-justify">
          Aptifyr is an ed-tech initiative designed to help you overcome your weaknesses and become industry-ready in today&apos;s fast-paced world. Our program offers exciting opportunities to acquire and develop industry-relevant skills, fostering both professional and personal growth. With a diverse range of learning experiences, we cover both soft and hard skills, ensuring that you gain knowledge beyond your syllabus and truly prepare for your future career
          </p>
        </div>
        <div className="hidden xl:w-1/2 xl:flex justify-center xl:justify-end xl:relative">
          <Image src="/aboutus.png" alt="About Us" width={700} height={700} className="xl:relative xl:right-[-18%]" />
        </div>
      </div>
      <div className="xl:relative rounded-lg bg-[#A131DC] m-6 xl:m-12 mt-20 flex justify-center items-center flex-col xl:flex-row p-6 xl:px-16 font-poppins xl:h-[35vh] xl:space-x-12  scroll-animation">
        <div className="xl:w-1/4">
          <Image src={'/aboutus1.png'} alt="About Us" width={300} height={300} className="xl:absolute -top-[50px]" />
        </div>
        <div className="xl:w-3/4 text-white mt-4 xl:mt-0">
          <h1 className="font-bold text-3xl">Why Us?</h1>
          <p className="text-xl mt-4">At Aptifyr, we stand out for our commitment to delivering tailored, high-impact learning experiences led by industry experts. Our unique approach combines cutting-edge content, practical insights, and a supportive community that fosters collaboration and growth. We continuously innovate and update our resources to ensure you stay ahead of industry trends, providing you with the tools and knowledge to achieve your goals effectively. Join us to experience a dynamic and results-driven learning journey designed to meet your specific needs.</p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center space-y-8 xl:space-y-0 xl:space-x-8 m-6 font-poppins mt-10 xl:mt-20 xl:pt-20 xl:h-[70vh]  scroll-animation">
        <div className="relative flex flex-col justify-center items-center xl:w-[33%] h-full">
          <Image src="/vision.png" alt="Mission" height={200} width={200} className="hidden xl:block absolute bottom-[22rem] left-8" />
          <div className="flex flex-col justify-center items-center p-8 bg-[#A4EBA4] rounded-xl h-[70%]">
            <h1 className="text-5xl font-bold">Our Vision</h1>
            <p className="text-justify mt-4 text-md">
              The vision of Aptifyr is to inculcate self-motivation in all students worldwide through its courses and skill development sessions. Moreover, making soft skills a part of the curriculum in primary education is also a key driver for our motivation. After our sessions, every student should feel confident about themselves and know how to express their thought processes and emotions in front of everyone in the right tone with logical validation.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center xl:w-[33%] h-full">
          <Image src="/mission.png" alt="Mission" height={200} width={200} className="hidden xl:block absolute bottom-[22.75rem] right-8" />
          <div className="flex flex-col justify-center items-center p-8 bg-[#FFEFC3] rounded-xl h-[70%]">
            <h1 className="text-5xl font-bold">Our Mission</h1>
            <p className="text-justify mt-4 text-md">
              Aptifyr targets to include necessary soft skill education into students&apos; curriculum at an early age to promote the development of students into bright individuals and aspirant leaders. Aptifyr aims to bridge the gap between the students and their quest to learn soft skills by connecting them to industry experts. It is achieved by conducting live events, webinars, and seminars in school.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
