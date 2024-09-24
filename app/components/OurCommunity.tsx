"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCommunity = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Screen width less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center scroll-animation">
      <h1 className="font-poppins text-[#6A6B73] text-xl text-center md:text-3xl lg:text-2xl my-8 px-8">OUR NETWORK OF STRATEGIC PARTNERS AND COLLABORATORS</h1>
      <div className="w-[80%] md:w-[70%] overflow-hidden py-2 md:py-2 bg-white border rounded-l-full rounded-r-full">
        <Slider {...settings} className="community">
          <div>
            <Image src="/logo1.png" alt="Logo 1" width={175} height={175} />
          </div>
          <div>
            <Image src="/logo2.png" alt="Logo 2" width={175} height={175} />
          </div>
          <div>
            <Image src="/logo3.png" alt="Logo 3" width={125} height={125} />
          </div>
          <div>
            <Image src="/logo4.png" alt="Logo 4" width={175} height={175} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurCommunity;