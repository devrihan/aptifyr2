import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <div className=" bg-black">
      <div className="scroll-animation flex flex-col xl:flex-row p-8 justify-center items-center h-[80%] md:h-[70%]  w-full">
        <div className="flex justify-center items-center w-[90%] xl:w-1/2 mb-4">
          <Image src="/Community.png" alt="" width={400} height={400} />
        </div>
        <div className="flex flex-col text-white justify-center items-start w-full xl:w-1/2">
          <h1 className="font-poppins text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
            Join our <span className="text-[#A131DC]">comminity</span> of learners
          </h1>
          <p className="font-poppins text-lg md:text-2xl xl:text-xl">
            Become a part of our vibrant and diverse community dedicated to continuous learning and personal growth. By joining us, you’ll gain access to a wealth of resources, engaging sessions, and collaborative opportunities that will empower you to expand your knowledge and skills. Connect with
            like-minded individuals, participate in enriching discussions, and stay at the forefront of industry trends. Whether you’re looking to deepen your expertise or explore new interests, our community is here to support your journey every step of the way
          </p>
          <Link href="https://chat.whatsapp.com/Hlwer0Rl5cq0U58bv5zW7e" target="_blank">
            <button className="rounded-xl md:text-lg font-poppins py-3 px-3 bg-[#A131DC] mt-4">Join Our Community</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
