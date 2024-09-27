"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classnames from 'classnames';

interface CardData {
  title: string;
  text: string;
  imageUrl: string;
}

const combinedData: CardData[] = [
  {
    "title": "Danish Akhtar",
    "text": "“The sessions were incredibly insightful and well-organized. I've gained valuable knowledge that I can apply to my work immediately.”",
    "imageUrl": "/reviews/raheel_akhtar.png"
  },
  {
    "title": "Priya Patel",
    "text": "“Joining this community has been a game-changer for my learning journey. The resources and networking opportunities are top-notch!”",
    "imageUrl": "/reviews/priya_patel.png"
  },
  {
    "title": "Dibya Shakti",
    "text": "“The quality of content and the expertise of the speakers exceeded my expectations. Highly recommend to anyone looking to advance their skills.”",
    "imageUrl": "/reviews/dibyashakti.png"
  },
  {
    "title": "Farheen Fathima",
    "text": "“I’ve learned so much from the interactive sessions. The practical tips and real-world applications have been immensely helpful.”",
    "imageUrl": "/reviews/farheen_fathima.png"
  },
  {
    "title": "Jateen Sahu",
    "text": "“The webinars are engaging and filled with actionable insights. I appreciate the effort put into delivering high-quality content.”",
    "imageUrl": "/reviews/jateen_sahu.png"
  },
  {
    "title": "Srestha Ram",
    "text": "“An excellent platform for continuous learning. The variety of topics covered and the expertise of the instructors are commendable.”",
    "imageUrl": "/reviews/srestha_ram.png"
  },
  {
    "title": "Abhilash Sarangi",
    "text": "“The sessions are well-structured and easy to follow. I've gained new perspectives and skills that will benefit me in my professional life.”",
    "imageUrl": "/reviews/abhilash_sarangi.png"
  },
  {
    "title": "Kaustubh Biswas",
    "text": "“Being part of this community has been a great experience. The sessions are relevant and the networking opportunities are invaluable.”",
    "imageUrl": "/reviews/kaustubh_biswas.png"
  },
  {
    "title": "Suresh Joshi",
    "text": "“The learning materials provided are excellent, and the interactive nature of the sessions keeps me engaged and motivated.”",
    "imageUrl": "/reviews/suresh_joshi.png"
  },
  {
    "title": "Aisha Khan",
    "text": "“I’m impressed with the quality and relevance of the sessions. The community is supportive, and I’ve made great connections through this platform.”",
    "imageUrl": "/reviews/kavita_iyer.png"
  }
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Increase this to make the transition animation slower and smoother
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Increase this to increase the time between auto-play transitions
    pauseOnHover: true,
    cssEase: 'linear',
    rows: 2,
    responsive: [
      {
        breakpoint: 768, // window width to apply these settings
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // only one row
        },
      },
    ],
  };


  const colorClasses = ['card-color1', 'card-color2', 'card-color3', 'card-color4'];
  
  // Function to shuffle an array
  const shuffleArray = (array: String []) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Shuffle the color classes
  const shuffledColorClasses = shuffleArray([...colorClasses]);
  
  const cards = combinedData.map((name, index) => {
    const colorClass = shuffledColorClasses[index % shuffledColorClasses.length];
  
    return {
      title: name.title,
      text: name.text,
      colorClass: colorClass,
      imageUrl: name.imageUrl,
    };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }} className='scroll-animation'>
      <h2 className="font-bebas text-2xl my-8 font-semibold px-8">
        Don&apos;t take our word for it, see what the <span style={{ color: '#A131DC' }}>community</span> is saying
      </h2>
      <div className="carousel ">
        <Slider {...settings}>
        {cards.map((card, index) => (
            <div key={index} className={classnames('card', card.colorClass)}>
              <img src={card.imageUrl} alt={card.title} className="card-image" />
              <h3 className='text-black mt-4 text-xl font-bold'>{card.title}</h3>
              <p className='text-black text-sm mt-4'>{card.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
