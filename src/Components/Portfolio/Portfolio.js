import React from "react";

const Portfolio = () => {
  const images = [
    {
      id: 1,
      img: "https://i.ibb.co/wdLmRhq/david-holifield-7e-Pjhwxtx-CU-unsplash.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co/r53FQhD/elvis-bekmanis-WJc87-MVc-Da-A-unsplash.jpg",
    },
    {
      id: 3,
      img: "https://i.ibb.co/C52NVfS/vadim-paripa-Pu-Xt-B1-B4z-L8-unsplash.jpg",
    },
    {
      id: 4,
      img: "https://i.ibb.co/6w1sFn7/leonardo-miranda-dv-F6s1-H1x68-unsplash.jpg",
    },
    {
      id: 5,
      img: "https://i.ibb.co/jLZcbDH/sandy-millar-8va-QKYnaw-Hw-unsplash.jpg",
    },
    {
      id: 6,
      img: "https://i.ibb.co/1ZHTmZm/photos-by-lanty-O38-Id-cy-V4-M-unsplash.jpg",
    },
    {
      id: 7,
      img: "https://i.ibb.co/SJhdnMm/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg",
    },
    {
      id: 8,
      img: "https://i.ibb.co/6D931sX/nathan-dumlao-5-BB-at-DT4o-A-unsplash.jpg",
    },
    {
      id: 9,
      img: "https://i.ibb.co/mtG9XGw/nikita-shirokov-q-Ggjalog-Cd-E-unsplash.jpg",
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex justify-center align-middle my-5">
        <h1>Portfolio</h1>
      </div>
      <div className="container mx-auto gap-5 grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1  justify-center justify-items-center -">
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[0].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[1].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[2].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[3].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[4].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[5].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[6].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[7].img} alt="" />
          <img className="rounded-sm p-2 w-[250px] h-[250px] object-cover ring-4 hover:ring-1 ring-[#D5B69C] transform transition duration-500 hover:scale-125" src={images[8].img} alt="" />
          
          
      </div>
    </div>
  );
};

export default Portfolio;
