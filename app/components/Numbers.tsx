'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Numbers = () => {
  const [count1, setCount1] = useState(0);
  const [hasCounted1, setHasCounted1] = useState(false);
  const [count2, setCount2] = useState(0);
  const [hasCounted2, setHasCounted2] = useState(false);
  const [count3, setCount3] = useState(0);
  const [hasCounted3, setHasCounted3] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 50) {
          clearInterval(interval1);
          setHasCounted1(true); // Set completion status to true
        }
        return newCount;
      });
    }, 50); // Adjust speed here

    const interval2 = setInterval(() => {
      setCount2((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 70) {
          clearInterval(interval2);
          setHasCounted2(true); // Set completion status to true
        }
        return newCount;
      });
    }, 50); // Adjust speed here

    const interval3 = setInterval(() => {
      setCount3((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 10) {
          clearInterval(interval3);
          setHasCounted3(true); // Set completion status to true
        }
        return newCount;
      });
    }, 50); // Adjust speed here

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className=" bg-black pb-8 font-poppins">
      <div className="scroll-animation flex flex-col justify-center items-center h-full">
        <h1 className="text-white font-poppins text-3xl my-8 font-semibold mx-8 md:mx-0 text-center">
          Some <span style={{ color: '#A131DC' }}>numbers</span> that matter
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex h-64 w-64 flex-col justify-center items-center bg-[#CDB0FF] rounded-lg p-4 space-y-4">
            <Image src="/numbers.gif" width={100} height={100} alt="numbers" />
            <h1 className="font-bold text-4xl">
              {count1}
              {hasCounted1 && '+'}
            </h1>
            <p className="text-xl">Expert connections</p>
          </div>
          <div className="flex h-64 w-64 flex-col justify-center items-center bg-[#A4EBA4] rounded-lg p-4 space-y-4">
            <Image src="/numbers.gif" width={100} height={100} alt="numbers" />
            <h1 className="font-bold text-3xl">
              {count2}
              {hasCounted2 && '+'}
            </h1>
            <p className="text-xl">Community members</p>
          </div>
          <div className="flex h-64 w-64 flex-col justify-center items-center bg-[#FFEFC3] rounded-lg p-4 space-y-4">
            <Image src="/numbers.gif" width={100} height={100} alt="numbers" />
            <h1 className="font-bold text-3xl">
              {count3}
              {hasCounted3 && '+'}
            </h1>
            <p className="text-xl">Events Hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
