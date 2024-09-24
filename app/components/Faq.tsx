'use client';
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: 'What skills or knowledge areas does your community focus on?', answer: 'Our community focuses on a wide range of skills and knowledge areas including technology, design, business development, and personal growth. We offer sessions and resources tailored to enhance expertise in these fields and support continuous learning.' },
    { question: 'What is the primary function of your organization?', answer: 'Our organization primarily functions as a platform for fostering learning and collaboration. We facilitate B2B partnerships with schools to enhance educational experiences through tailored learning solutions, resources, and training programs.' },
    { question: 'How can I benefit from participating in your sessions and webinars?', answer: 'Participating in our sessions and webinars allows you to gain valuable insights from industry experts, stay updated on the latest trends, and acquire practical skills. It also offers networking opportunities with professionals and peers in your field of interest.' },
    { question: 'Do you offer any resources or tools for ongoing learning?', answer: 'Yes, we provide a variety of resources and tools including recorded webinars, articles, and practical guides. These resources are designed to support ongoing learning and professional development, helping you apply what you’ve learned in real-world scenarios.' },
    { question: 'How does your organization collaborate with schools?', answer: 'We collaborate with schools through B2B partnerships to provide customized learning solutions and professional development programs. These collaborations aim to enhance educational outcomes, support teachers and students, and integrate innovative tools and strategies into the curriculum.' }
  ];
  return (
    <div className="flex justify-center items-center flex-col xl:flex-row mt-4 md:my-16 scroll-animation">
      <div className="flex justify-center items-center xl:w-[25%] p-8 px-16">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full xl:w-[50%] p-4 md:p-8">
        {questions.map((item, index) => (
          <div key={index} className="w-full mb-4">
            <div className="flex justify-between items-center cursor-pointer p-4" onClick={() => toggleQuestion(index)}>
              <span className={`${openIndex === index ? 'text-purple-600 font-bold' : 'text-black'}`}>{item.question}</span>
              <span className="text-purple-600">+</span>
            </div>
            <div className={`overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="p-4 bg-white">{item.answer}</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
