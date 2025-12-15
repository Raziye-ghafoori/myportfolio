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
    <div className='flex flex-col md:w-[30%] w-[80%] mx-[auto] my-[10px] justify-between bg-[#ffffff6e] rounded-[20px] text-black items-center'>
      <img
        src={img}
        className='w-[80%] h-[50%] mx-[auto] my-[20px] border-[#F1B24A] border-[5px] rounded-[20px]'
        alt={imgAlt}
      />
      <span className='cursor-default mx-[20px]'>{text}</span>
      <span className='text-[#00000064] cursor-default m-[5px]'>{lang}</span>
      <a href={link} target='_blank' className='flex hover:text-[#ffffff] text-[#00000064] items-center m-[20px]'>
        <IoIosArrowRoundForward />
        <span>توضیحات بیشتر</span>
      </a>
    </div>

);

export default Portfolio_card;