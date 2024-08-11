import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      src: project1,
      link: "https://stuydnotion.vercel.app/",
      code:"https://github.com/INDIANgaurav/stuydnotion"
    },
    {
      id: 2,
      src: project2,
      link: "https://glamour-food-app1.vercel.app/",
      code:"https://github.com/INDIANgaurav/glamourFullstack"
    },
    {
      id: 3,
      src: project3,
      link: "https://glittery-daifuku-90258f.netlify.app/",
      code:"https://github.com/INDIANgaurav/-Space-Website-Using-ReactJS-and-Tailwind-CSS"
    },
    {
      id: 4,
      src: project4,
      link: ""
    },
    {
      id: 5,
      src: project5,
      link: "https://movie-flix-nextjs-mu.vercel.app/",
      code:"https://github.com/INDIANgaurav/movieFlix-nextjs"
    },
  ];

  // Function to handle redirection
  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, "_blank"); // Opens the link in a new tab
    } else {
      alert("Demo link is not available.");
    }
  };
  const handleCodeClick = (code) => {
    if (code) {
      window.open(code, "_blank"); // Opens the link in a new tab
    } else {
      alert("code link is not available.");
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button 
                  onClick={() => handleDemoClick(link)} 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                
                <button 
                onClick={() => handleCodeClick(code)} 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
