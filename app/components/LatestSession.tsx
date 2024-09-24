import HoverImage from './HoverImage';

const LatestSession = () => {
  const imagesData = [
    { src: '/session/gai.jpg', alt: 'Background', description: 'This session offered strategies for using Generative AI to enhance academic performance, giving students actionable insights.' },
    { src: '/session/sp.jpg', alt: 'Background', description: 'This session focused on leveraging AI tools to boost productivity, streamline study routines, and improve academic performance.' },
    { src: '/session/idm.jpg', alt: 'Background', description: 'This session covered fundamental design principles, including key concepts, tools, and techniques for effective, appealing designs.' },
  ];

  return (
    <div className="relative xl:h-[100vh] md:h-[88vh] h-[105vh] flex justify-center items-start xl:items-center">
      <div className="hidden absolute inset-0 h-full w-full xl:flex justify-center items-center">
        <div className="absolute top-1/4 h-1/2 w-full bg-black"></div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center w-full h-full px-8 xl:px-16  scroll-animation">
        <div className="w-full xl:w-[60%] text-white relative z-10">
          <h1 className="text-4xl xl:text-5xl text-black xl:text-white font-poppins mt-8 mb-4 xl:my-4 font-bold">
            Our Latest <span style={{ color: '#A131DC' }}>Sessions</span>
          </h1>
          <p className="text-lg hidden xl:flex">
            Stay updated with our most recent sessions, where we dive into the latest trends, insights, and innovations. From expert-led workshops to engaging discussions, these sessions are designed to provide valuable knowledge and foster collaboration. Check out the highlights and key takeaways
            from our latest events, and join us to be a part of the ongoing conversation and learning.
          </p>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full w-full md:w-[59%] xl:w-[22.2%]">
          <div className="absolute inset-0 h-full w-full" style={{ backgroundImage: 'url(/phone.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          <div className="relative w-[90%] overflow-y-auto p-4 custom-scrollbar" style={{ marginTop: '4.375rem', height: 'calc(65% - 60px)' }}>
            <div className="h-full m-2 space-y-2">
              {imagesData.map((image, index) => (
                <HoverImage key={index} {...image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSession;
