'use client';
import { useState } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:contact@aptifyr.in?subject=Contact%20Form%20Submission&body=${encodeURIComponent(message)}%0A%0AFrom%2C%0A${encodeURIComponent(name)}%0A${encodeURIComponent(email)}%0A${encodeURIComponent(phone)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="flex flex-col xl:flex-row p-10 xl:p-12 xl:px-20 xl:m-12 xl:mx-20 scroll-animation">
      <div className="flex w-full  xl:w-1/2 justify-center items-start flex-col">
        <div className="flex items-end">
          <h1 className="font-poppins font-semibold text-6xl xl:w-[45%]">Let&apos;s get in touch</h1>
          <Image alt="GIF" width={75} height={75} src="/contactus.gif" />
        </div>
        <h3 className="font-poppins font-semibold text-2xl xl:w-1/2 mt-10 leading-tight">Don&apos;t be afraid to say hello to us!</h3>
        <div className="flex flex-col items-start space-y-2 mt-8">
          <div className="flex items-center space-x-2">
            <Image src="/contactus/email.png" width={30} height={30} alt="Contact Us" />
            <span className="text-2xl font-poppins font-semibold">Email</span>
          </div>
          <span className="text-lg font-poppins ml-10 mt-0">contact@aptifyr.in</span>
        </div>
        <div className="flex flex-col items-start space-y-2 mt-8">
          <div className="flex items-center space-x-2">
            <Image src="/contactus/phone.png" width={30} height={30} alt="Contact Us" />
            <span className="text-2xl font-poppins font-semibold">Phone</span>
          </div>
          <span className="text-lg font-poppins ml-10 mt-0">+91 9437810814</span>
        </div>
        <div className="flex flex-col items-start space-y-2 mt-8">
          <div className="flex items-center space-x-2">
            <Image src="/contactus/location.png" width={30} height={30} alt="Contact Us" />
            <span className="text-2xl font-poppins font-semibold">Office</span>
          </div>
          <span className="text-lg font-poppins ml-10 mt-0 xl:w-full">Vellore, Katpadi, TamilNadu - 632014</span>
        </div>
      </div>
      <div className="relative w-full xl:w-1/2 xl:m-12 mt-12 xl:mt-40">
        <Image height={350} width={350} src="/formTop.png" alt="Form Top" className="hidden xl:block absolute top-[-12.5rem] right-10" />
        <div className="p-8 bg-black rounded-lg overflow-hidden">
          <h1 className="font-poppins text-2xl text-white">Contact Us</h1>
          <form className="flex flex-col space-y-4 mt-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border-b-2 bg-black border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-white" style={{ caretColor: 'white' }} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border-b-2 bg-black border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-white" style={{ caretColor: 'white' }} />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-2 border-b-2 bg-black border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-white" style={{ caretColor: 'white' }} />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="p-2 border-b-2 bg-black border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-500 resize-none text-white" style={{ caretColor: 'white' }}></textarea>
            <button type="submit" className="p-2 bg-[#A131DC] text-white rounded-xl mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
