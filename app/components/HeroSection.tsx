import Image from 'next/image';
import Link from 'next/link';
import TypewriterComponent from './Typewriter';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center h-[90.5vh] xl:h-[91.5vh] flex-col xl:flex-row relative hero-section">
        <div className="absolute top-0 right-0 flex flex-col items-center space-y-3 m-4">
          <Link href="https://www.instagram.com/aptifyr?igsh=MW0xN3Y0ZjlmczRmMw==" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Facebook" width={24} height={24} />
          </Link>
          <Link href="https://youtube.com/@aptifyr?si=o0p2YxD0MIEESpOq" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/youtube.svg" alt="Twitter" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/company/aptifyrskills/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/Linkedin.svg" alt="Instagram" width={26} height={26} />
          </Link>
        </div>
        <div className="w-full xl:w-[60%] flex flex-col justify-center items-start xl:justify-start xl:items-start px-4 xl:mx-4 md:px-10 xl:pl-14 mt-2 xl:mt-0 h-[30vh] xl:h-[45vh]">
          <h1 className="font-semibold xl:font-bold text-6xl md:text-[5rem] text-[#2C2A40] font-bebas">WHERE TOMORROW BEGINS</h1>
          <TypewriterComponent/>
        </div>
        <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start xl:items-end mt-8 xl:mt-0 px-8 mb-4 xl:mx-10 xl:pl-10 xl:mb-10">
          <Image src="/hero.png" alt="hero" width={600} height={600} />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 xl:h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
  )
}

export default HeroSection