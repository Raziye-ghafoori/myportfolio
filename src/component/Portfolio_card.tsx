import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import "../App.css"

interface PortfolioCardProps {
  img: string;
  imgAlt: string;
  text: string;
  lang: string;
  link: string;
}

const Portfolio_card: React.FC<PortfolioCardProps> = ({ img, imgAlt, text, lang, link }) => (
    <div className='flex gap-1 animate-fade-up animate-view  flex-col shadow-xl md:w-[30%] w-[80%] mx-[auto] my-[10px] justify-between bg-black/40 rounded-[20px] text-black items-center'>
      <img
        src={img}
        className='w-full h-[300px] mx-[auto] mb-[20px] a rounded-t-[20px]'
        alt={imgAlt}
      />
      <span className='cursor-default text-red-500  mx-[20px]'>{text}</span>
      <span className='text-white/70 cursor-default m-[5px]'>{lang}</span>
      <a href={link} target='_blank' className='flex hover:text-[#ffffff] text-gray-400/70 items-center m-[20px]'>
        <IoIosArrowRoundForward />
        <span>توضیحات بیشتر</span>
      </a>
    </div>

);

export default Portfolio_card;