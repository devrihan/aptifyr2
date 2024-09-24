"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-8 px-8 md:px-12 h-auto relative">
      <div className="container mx-auto flex-col md:flex-row flex justify-between items-start space-y-4 md:space-y-0 md:space-x-8 mb-10">
        <div className='w-[60%] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
          <nav className="space-y-2 w-[30%]">
            <h2 className="text-2xl font-semibold">Navigation</h2>
            <ul className="flex flex-col">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/ourskills" className="text-muted-foreground hover:text-primary">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-muted-foreground hover:text-primary">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary">
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-y-2 w-[30%]">
            <h2 className="text-2xl font-semibold">Community</h2>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="https://www.instagram.com/aptifyr?igsh=MW0xN3Y0ZjlmczRmMw==" target='_blank' className="text-muted-foreground hover:text-primary flex items-center space-x-2">
                  <Image src="/socials/Instagram.png" alt="Instagram" width={20} height={20} />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/@aptifyr?si=o0p2YxD0MIEESpOq" target='_blank' className="text-muted-foreground hover:text-primary flex items-center space-x-2">
                  <Image src="/socials/Youtube.png" alt="Youtube" width={20} height={20} />
                  <span>Youtube</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/aptifyrskills/" target='_blank' className="text-muted-foreground hover:text-primary flex items-center space-x-2">
                  <Image src="/socials/Linkedin.png" alt="LinkedIn" width={20} height={20} />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-center items-center flex-col space-y-2 w-full md:w-[40%]">
          <Image src="/footer_logo.png" alt="Aptifyr Logo" width={300} height={300} />
          <p className="text-muted-foreground w-full text-center">+91 9437810814</p>
          <p className="text-muted-foreground w-full text-center">aptifyrofficial@gmail.com</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image src="/Footer.png" alt="Aptifyr Logo" width={500} height={500} />
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-black border border-white text-white p-2 px-3 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;