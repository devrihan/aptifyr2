'use client';
import { useState } from 'react';

type HoverImageProps = {
  src: string;
  alt: string;
  description: string;
};

function useHoverState() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return { isHovered, handleMouseEnter, handleMouseLeave };
}

const HoverImage = ({ src, alt, description }: HoverImageProps) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverState();

  return (
    <div className={`relative bg-white rounded-xl h-1/3 overflow-hidden`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={src} alt={alt} className={`${isHovered ? 'blur-effect' : ''} absolute w-full h-full object-cover`} />
      {isHovered && (
        <div className="content absolute inset-0 flex flex-col items-center justify-center text-black">
          <p className="font-poppins md:text-xs leading-tight p-4 font-bold">{description}</p>
        </div>
      )}
    </div>
  );
};

export default HoverImage;
