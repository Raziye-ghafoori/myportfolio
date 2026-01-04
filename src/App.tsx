import { useState, useEffect } from 'react'
import './App.css'
import { FaCss3Alt, FaJsSquare, FaTelegramPlane, FaReact, FaGitAlt, FaGithub, FaPhoneSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuCopyCheck } from "react-icons/lu";
import { SiChakraui } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TiHtml5 } from "react-icons/ti";
import Portfolio_card from './component/Portfolio_card';
import { SkillCircle } from "./component/skillCircle"


function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isCopied, setIsCopied] = useState(false);
  const [copy, setCopy] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyClick = (text: string,) => {
    setCopy(text);
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <header className=' z-10 md:p-[20px] px-[10px] h-[50px] flex justify-between w-[100%] sticky top-0 bg-black'>
        <div className='hidden md:inline'>
          <a href='#Home' className={`px-[10px] pb-[3px] hover:animate-hover text-center transition-all duration-300 ${activeSection === 'Home' ? 'border-b-[6px] border-red-900' : 'border-b-[1px] border-transparent hover:border-red-900'}`}> خانه </a>
          <a href='#About' className={`px-[10px] pb-[3px] hover:animate-hover text-center transition-all duration-300 ${activeSection === 'About' ? 'border-b-[6px] border-red-900' : 'border-b-[1px] border-transparent hover:border-red-900'}`}> درباره من </a>
          <a href='#Skills' className={`px-[10px] pb-[3px] hover:animate-hover text-center transition-all duration-300 ${activeSection === 'Skills' ? 'border-b-[6px] border-red-900' : 'border-b-[1px] border-transparent hover:border-red-900'}`}> مهارت ها </a>
          <a href="#Portfolio" className={`px-[10px] pb-[3px] hover:animate-hover text-center transition-all duration-300 ${activeSection === 'Portfolio' ? 'border-b-[6px] border-red-900' : 'border-b-[1px] border-transparent hover:border-red-900'}`}> نمونه کار </a>
          <a href="#Contact" className={`px-[10px] pb-[3px] hover:animate-hover text-center transition-all duration-300 ${activeSection === 'Contact' ? 'border-b-[6px] border-red-900' : 'border-b-[1px] border-transparent hover:border-red-900'}`}> تماس با من </a>
        </div>
        <button
          className="md:hidden my-[auto] "
          onClick={toggleMenu}
          aria-label="باز کردن منو"
        >
          <TfiMenuAlt />
        </button>
        <div className='flex cursor-default items-center justify-between md:w-[10%] w-[25%] '>
          <span > راضیه غفوری  </span>
          <LiaLaptopCodeSolid className='text-[50px]' />
          {isMenuOpen && (
            <nav className="md:hidden w-[130px] rounded-lg fixed right-2  top-[30px] mt-4 pt-4 bg-red-800">
              <div className="flex flex-col rounded-lg space-y 5">
                <a href='#Home' className={`text-[15px] px-[5px] pb-[3px] border-red-900  transition-all duration-300 w-full text-center py-1 ${activeSection === 'Home' ? 'border-x-10' : 'hover:bg-red-900'}`}> خانه </a>
                <a href='#About' className={`text-[15px]  px-[5px] pb-[3px] border-red-900  text-center transition-all duration-300 py-1 ${activeSection === 'About' ? 'border-x-10' : 'hover:bg-red-900'}`}> درباره من </a>
                <a href='#Skills' className={`text-[15px] px-[5px] pb-[3px]  border-red-900  text-center transition-all duration-300 py-1 ${activeSection === 'Skills' ? 'border-x-10' : 'hover:bg-red-900'}`}> مهارت ها </a>
                <a href="#Portfolio" className={`text-[15[x] px-[5px] pb-[3px] border-red-900  text-center transition-all duration-300 py-1 ${activeSection === 'Portfolio' ? 'border-x-10' : 'hover:bg-red-900'}`}> نمونه کار </a>
                <a href="#Contact" className={`text-[15px] px-[5px] pb-[3px] border-red-900  rounded-b-lg  text-center transition-all duration-300 py-1 ${activeSection === 'Contact' ? 'border-x-10' : 'hover:bg-red-900'}`}> تماس با من </a>
              </div>
            </nav>
          )}
        </div>

      </header>
      <div id='Home'></div>
      <br /><br />

      <section className='flex items-center md:flex-row flex-col justify-between w-full lg:h-[550px] h-[400px] py-[20px]'>
        <div className='md:w-[50%] flex flex-col items-start justify-start md:mx-[30px] mx-5 '>
          <span className='xl:text-[60px] md:text-[45px] text-[30px] font-bold my-[10px] text-righty md:my-[20px]  inline-block overflow-hidden whitespace-nowrap border-l-2 border-white animate-typing-blink '>من راضیه غفوری هستم</span>
          <span className='xl:text-[30px] text-[15px] text-[orange] '> توسعه دهنده Front End</span>
          <span className='xl:text-[15px] text-right'>من یک توسعه دهنده عاشق حل مسئله و خلق تجربیات کاربری عالی هستم</span>
        </div>
        <div className='w-[50%] animate-fade-in flex items-center justify-center'>
          <img src="/img/IMG_1534.webp" alt="عکس خودم" className='xl:w-[500px] xl:relative xl:left-10 xl:top-10 w-[300px] xl:h-[500px] h-[300px] border-20 border-black/50 rounded-[100%] animate-fade-in' />
          
          <div className='relative lg:top-25 sm:top-30 top-20  xl:left-30 lg:left-20 sm:left-30 left-10'>
            <RiTailwindCssFill className='text-[50px]  bg-white/80 p-1 animate-slide-move rounded-[100px] absolute lg:top-35 top-20 left-3  m-[10px] text-blue-400  ' />
            <TiHtml5 className='text-[50px] bg-white/80 p-1 animate-slide-move rounded-[100px] m-[10px] absolute top-20 top-10 xl:left-100 left-50  text-orange-500  ' />
            <FaGitAlt className='text-[50px] bg-white/80 p-1 animate-slide-move rounded-[100px] absolute bottom-10 right-0 m-[10px] text-red-400  ' />
            <RiNextjsFill className='text-[50px] bg-white/80 p-1 animate-slide-move rounded-[100px] absolute sm:bottom-30 bottom-20 xl:left-120 left-60 m-[10px] text-gray-400  ' />
            <FaJsSquare className='text-[50px]  bg-white/80 p-1 animate-slide-move rounded-[100px] absolute sm:bottom-50 bottom-30 left-5 m-[10px] text-yellow-500  ' />
            <BiLogoTypescript className='text-[50px]  bg-white/80 p-1 animate-slide-move rounded-[100px] absolute bottom-0 xl:left-130 lg:left-80 left-60 m-[10px] text-blue-500' />
            <FaReact className='text-[50px]  bg-white/80 p-1 animate-slide-move rounded-[100px] absolute  m-[10px] text-blue-400  ' />
          </div>
        </div>
      </section>
      <div id='About'></div>
      <br /><br />
      <section className='md:w-[70%] h-[40%] mx-[auto] my-[70px] bg-black/40 animate-fade-up animate-view rounded-[20px] flex md:flex-row flex-col items-center'>
        <h1 className='m-[20px] text-red-400 cursor-default'>درباره من</h1>
        <span className='md:m-[50px] m-[20px] cursor-default' >من راضیه غفوری هستم، 24 ساله با سابقه یک ساله در حوزه برنامه‌نویسی فرانت اند با علاقه‌مندی عمیق به توسعه رابط‌های کاربری مدرن و کاربرپسند. همواره تلاش می‌کنم بهترین تجربه کاربری را با استفاده از تکنولوژی‌های روز ارائه دهم.

          علاقه‌مند به یادگیری مداوم و به‌روزرسانی دانش فنی خود هستم و باور دارم که نوآوری و خلاقیت کلید موفقیت در دنیای برنامه‌نویسی است. من به کار تیمی و همکاری موثر اهمیت می‌دهم و دوست دارم در پروژه‌هایی مشارکت کنم که علاوه بر چالش‌برانگیز بودن، فرصت رشد و یادگیری را فراهم کنند.

          هدف من ساختن محصولاتی است که نه تنها عملکرد عالی داشته باشند، بلکه تجربه‌ای لذت‌بخش و ساده برای کاربران ایجاد کنند. مشتاقم با استفاده از مهارت‌هایم، تاثیر مثبتی در دنیای دیجیتال بگذارم و همیشه آماده‌ام تا با پروژه‌های جدید و هیجان‌انگیز روبرو شوم.</span>
      </section>
      <div id='Skills'></div>
      <br /><br />
      <section className='flex flex-col items-center  my-[50px] mx-[auto]'>
        <div className='text-[50px] m-[20px] cursor-default'> مهارت ها </div>
        <div className='flex flex-wrap justify-center  '>
          <div className='md:w-[20%] w-[40%]  flex items-center animate-fade-up animate-view flex-col mb-[10px]'>
            <span className='cursor-default'>HTML</span>
            <SkillCircle percent={80} />
            <TiHtml5 className='text-[60px] m-[10px] text-orange-500 ' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view  mb-[10px] flex items-center  flex-col'>
            <span className='cursor-default'>CSS</span>
            <SkillCircle percent={70} />
            <FaCss3Alt className='text-[60px] m-[10px] text-blue-400' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Java script</span>
            <SkillCircle percent={50} />
            <FaJsSquare className='text-[60px] m-[10px] text-yellow-300' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>React</span>
            <SkillCircle percent={50} />
            <FaReact className='text-[60px] m-[10px] text-sky-300' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Type SCript</span>
            <SkillCircle percent={70} />
            <BiLogoTypescript className='text-[60px] m-[10px] text-blue-500' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Tailwind</span>
            <SkillCircle percent={60} />
            <RiTailwindCssFill className='text-[60px] m-[10px] text-cyan-500' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view  mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Chakra UI</span>
            <SkillCircle percent={80} />
            <SiChakraui className='text-[60px] m-[10px] text-emerald-300' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Git</span>
            <SkillCircle percent={60} />
            <FaGitAlt className='text-[60px] m-[10px] text-orange-600' />
          </div>
          <div className='md:w-[20%] w-[40%]  animate-fade-up animate-view  mb-[10px] flex items-center flex-col'>
            <span className='cursor-default'>Next.js</span>
            <SkillCircle percent={60} />
            <RiNextjsFill className='text-[60px] m-[10px] text-gray-400' />
          </div>
        </div>
      </section>
      <div id='Portfolio'></div>
      <br /><br />
      <section className=' mx-[auto] flex flex-col md:pt-[0] pt-[50px]'>
        <span className='p-[20px] text-[50px] cursor-default'>نمونه کار</span>
        <div className='flex justify-around md:flex-row flex-col flex-wrap'>
          <Portfolio_card img='/img/popMusic.webp' imgAlt='عکس سایت اهنگ ها' text=' سایت دیدن موزیک ویدئوهای آهنگ ها همراه با صفحه لاگین ' lang='Html, CSS' link='https://github.com/Raziye-ghafoori/pop-music'></Portfolio_card>
          <Portfolio_card img='/img/sarafi.webp' imgAlt="عکس سایت اطلاعات کشور ها" text=' سایت اطلاعات کشور ها (شامل تعداد جمعیت و مساحت و... ) با قابلیت دارک مود و جستجو' lang='Html, CSS' link='https://github.com/Raziye-ghafoori/project-sarafi'></Portfolio_card>
          <Portfolio_card img='/img/Bio.webp' imgAlt="عکس صفحه اطلاعات شرکت ها" text="صفحه اطلاعات تماس یک شرکت با قابلیت تغییر رنگ صفحه" lang='react , chakra UI , Css , HTML' link='https://github.com/Raziye-ghafoori/Bio_Hami_Team'></Portfolio_card>
          <Portfolio_card img='/img/calculator.webp' imgAlt="عکس ماشین حساب" text="ماشین حساب ساده" lang='react , js , tailwind , Css , HTML' link='https://github.com/Raziye-ghafoori/Calculator'></Portfolio_card>
          <Portfolio_card img='/img/digital_clock.webp' imgAlt="عکس ساعت دیجیتال" text="ساعت دیجیتال به همراه تقویم" lang='react , js , tailwind , Css , HTML' link='https://github.com/Raziye-ghafoori/Digital-clock'></Portfolio_card>
          <Portfolio_card img='/img/weather.webp' imgAlt="سایت نمایش آب و هوا" text="نمایش آب و هوای یک شهر به همراه نمودار تغییرات آب و هوایی" lang='react , js , tailwind , Css , HTML' link='https://github.com/Raziye-ghafoori/Weather'></Portfolio_card>
          <Portfolio_card img='/img/ToDoList.webp' imgAlt="to do list" text="یک سایت to do list ساده برای مدیریت کارها" lang='react , js , tailwind , Css , HTML' link='https://github.com/Raziye-ghafoori/ToDoList'></Portfolio_card>
          <Portfolio_card img='/img/zibook.webp' imgAlt="رزرو انلاین ارایشگاه " text="این سایت یک دمو ساده از یک سایت رزرو انلاین ارایشگاه است" lang='react , next.js , js , tailwind , Css , HTML' link='https://github.com/Raziye-ghafoori/zibook'></Portfolio_card>

        </div>
      </section>
      <div id='Contact'></div>
      <br /><br />
      <section className='flex pb-[300px] md:pt-[20px] pt-[50px]  flex-col mx-[auto] items-center'>
        <span className='text-[30px]'>روش های تماس با من</span>
        <div className='m-[20px] md:w-[60%] w-[90%]'>
          <div onClick={() => handleCopyClick('09305542864')} className='cursor-pointer m-[5px] flex justify-between items-center'>{isCopied && copy == '09305542864' ? <LuCopyCheck className='text-[20px] m-[10px] text-green-300' /> : <FaPhoneSquare className='text-[40px]' />}09305542864</div>
          <hr />
          <div onClick={() => handleCopyClick('raziye.ghafoori@gmail.com')} className='cursor-pointer m-[5px] flex justify-between items-center'>{isCopied && copy == 'raziye.ghafoori@gmail.com' ? <LuCopyCheck className='text-[20px] m-[10px] text-green-300' /> : <MdOutlineEmail className='text-[40px]' />}Raziye.ghafoori@gmail.com</div>
          <hr />
          <div onClick={() => handleCopyClick('https://github.com/Raziye-ghafoori')} className='cursor-pointer m-[5px] flex justify-between items-center'>{isCopied && copy == 'https://github.com/Raziye-ghafoori' ? <LuCopyCheck className='text-[20px] m-[10px] text-green-300' /> : <FaGithub className='text-[40px]' />}Raziye-ghafoori</div>
          <hr />
          <div onClick={() => handleCopyClick('@r_ghafoori00')} className='cursor-pointer m-[5px] flex justify-between items-center' >{isCopied && copy == '@r_ghafoori00' ? <LuCopyCheck className='text-[20px] m-[10px] text-green-300' /> : <FaTelegramPlane className='text-[40px]' />}r_ghafoori00@</div>
        </div>
      </section>
    </>
  )
}

export default App
