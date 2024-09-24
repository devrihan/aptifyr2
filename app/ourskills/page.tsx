'use client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Box from '../components/Box';
import Image from 'next/image';
import { useState } from 'react';

const OurSkills = () => {
  const [hoveredBoxIndexLeft, setHoveredBoxIndexLeft] = useState<number | null>(null);
  const [hoveredBoxIndexRight, setHoveredBoxIndexRight] = useState<number | null>(null);

  const leftBoxes = [
    {
      title: 'Soft Skills',
      color: '#F7365B',
      description: 'Developing strong soft skills is crucial for personal and professional success. Our focus on soft skills includes enhancing communication, teamwork, and emotional intelligence. These skills empower you to interact effectively, manage relationships, and navigate various social and professional scenarios with confidence and ease.',
      imageUrl: '/ourskill/image (4).png',
      imageHeight: 200,
      imageWidth: 300,
    },
    {
      title: 'Entrepreneurship',
      color: '#34A853',
      description: 'Entrepreneurship training equips you with the knowledge and skills needed to start and grow successful ventures. We cover key aspects such as business strategy, innovation, and risk management. Our programs are designed to foster an entrepreneurial mindset, helping you turn ideas into actionable plans and drive business growth with creativity and strategic thinking.',
      imageUrl: '/ourskill/image (3).png',
      imageHeight: 200,
      imageWidth: 200,
    },
  ];
  
  const rightBoxes = [
    {
      title: 'Technology',
      color: '#4285F4',
      description: 'In the ever-evolving tech landscape, staying updated with the latest technologies is essential. Our technology-focused programs provide in-depth training in areas like software development, data analytics, and emerging tech trends. Gain hands-on experience with cutting-edge tools and techniques to enhance your technical expertise and stay competitive in the digital world.',
      imageUrl: '/ourskill/image (1).png',
      imageHeight: 200,
      imageWidth: 300,
    },
    {
      title: 'Finance Literacy',
      color: '#FBBC05',
      description: 'Understanding financial principles is key to making informed decisions and managing resources effectively. Our finance literacy programs cover essential topics such as budgeting, investing, and financial planning. Equip yourself with the knowledge to handle personal and business finances wisely, ensuring financial stability and growth.',
      imageUrl: '/ourskill/image (2).png',
      imageHeight: 200,
      imageWidth: 200,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="xl:relative flex xl:flex-row flex-col-reverse justify-center items-center">
        <div className="w-full flex justify-center items-center xl:w-1/3 mx-12">
          <Image src="/ourskills.png" className="xl:absolute xl:bottom-0 xl:px-0 px-6" alt="our skills" width={500} height={500} />
        </div>
        <div className="w-full xl:w-2/3 p-4 md:p-8 flex justify-center items-center flex-col h-[200vh] md:h-auto">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-black font-bebas">Categories We Cover</h1>
          <div className="flex flex-col md:flex-row justify-center items-center m-8 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-4 h-auto md:h-[90vh]">
              {leftBoxes.map((box, index) => (
                <Box
                  key={index}
                  title={box.title}
                  color={box.color}
                  description={box.description}
                  imageUrl={box.imageUrl}
                  isHoveredAbove={hoveredBoxIndexLeft === index - 1}
                  isHoveredBelow={hoveredBoxIndexLeft === index + 1}
                  onHover={(hovered) => setHoveredBoxIndexLeft(hovered ? index : null)}
                  flexGrow={hoveredBoxIndexLeft === index ? 2 : 1}
                  imageWidth={box.imageWidth}
                  imageHeight={box.imageHeight}
                />
              ))}
            </div>
            <div className="flex flex-col space-y-4 h-auto md:h-[90vh]">
              {rightBoxes.map((box, index) => (
                <Box
                  key={index + 2} // Adjust key to avoid duplicate keys
                  title={box.title}
                  color={box.color}
                  description={box.description}
                  imageUrl={box.imageUrl}
                  isHoveredAbove={hoveredBoxIndexRight === index - 1}
                  isHoveredBelow={hoveredBoxIndexRight === index + 1}
                  onHover={(hovered) => setHoveredBoxIndexRight(hovered ? index : null)}
                  flexGrow={hoveredBoxIndexRight === index ? 2 : 1}
                  imageWidth={box.imageWidth}
                  imageHeight={box.imageHeight}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurSkills;
