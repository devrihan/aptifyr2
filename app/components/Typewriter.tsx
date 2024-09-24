"use client";
import { Typewriter } from 'react-simple-typewriter';

const TypewriterComponent = () => {
  return (
    <div className="font-poppins font-bold text-6xl md:text-[5rem] text-[#A131DC] mt-2 typewriter-wrapper">
    <Typewriter
      words={['innovate', 'inspire', 'impact']}
      loop={0} // Infinite loop
      cursor
      cursorStyle="|"
      typeSpeed={400}
      deleteSpeed={150}
      delaySpeed={1000}
    />
  </div>
  )
}

export default TypewriterComponent