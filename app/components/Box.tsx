'use client';
import { useState } from 'react';
import Image from 'next/image';

interface BoxProps {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  isHoveredAbove: boolean;
  isHoveredBelow: boolean;
  onHover: (hovered: boolean) => void;
  flexGrow: number;
  imageWidth: number;
  imageHeight: number;
}

const Box = ({ title, description, imageUrl, color, isHoveredAbove, isHoveredBelow, onHover, flexGrow, imageHeight, imageWidth }: BoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(false);
      }}
      style={{ backgroundColor: color, flexGrow, transition: 'flex-grow 1s ease-in-out' }}
      className="w-full p-6 text-white rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-500">
      <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'max-h-screen' : 'max-h-24'}`} style={{ maxHeight: isHovered ? '1000px' : '6rem' }}>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
        <p className={`${isHovered ? '' : 'line-clamp-3'}`}>{description}</p>
      </div>
      <div className={`self-end transition-all duration-500 transform ${isHovered ? 'scale-130' : 'scale-90'} ${isHoveredAbove || isHoveredBelow ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <Image src={imageUrl} alt="technology" width={imageWidth} height={imageHeight} />
      </div>
    </div>
  );
};

export default Box;
