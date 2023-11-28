'use client';
import React , {useState , useEffect} from 'react';
import Image from "next/image";


const Navbar = () => {


  const [dropDownShow , setDropDownShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolling, setScrolling] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollY = window.scrollY;

      const progress = (scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts.
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
   <>
   
   <div className={`navbar_statisic   w-full shadow-lg ${scrolling ? 'nav_color_scroll' : 'nav_color_static'}`} >

    <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${scrollProgress}%` }}>

    </div>
    </div>
    

    <div className="container-mid">
    { /* LOGO NAVBAR */ }
    <a to="/" >
    <div className="logo_div">
    {scrolling ? (
      <Image
        src='/assets/logos/rowad-white.png'
        width={120}
        height={90}
        alt='loader'
        className='object-contain'
      />
    ) : (
      <Image
        src='/assets/logos/rowad-trans.png'
        width={120}
        height={90}
        alt='loader'
        className='object-contain'
      />
    )}

    </div>
    </a>


    { /* List NAVBAR */ }
    <div>

    <div className="list_div">
    <ul className={`${scrolling ? 'flex_scroll' : 'flex_list'}`}>
    <a to="home">
    <li>
      <a href="#home" >
        الرئيسية
      </a>
    </li>
    </a>

    <a to="initiatives">
    <li>
      <a href="#initiatives" >
        من نحن
      </a>
    </li>
    </a>



    <a to="blog">
    <li>
      <a href="#blog" >
      الخدمات 
      </a>
    </li>
    </a>

   
   
    </ul>
    </div>

    <div className="action_div mx-2">
    <a to="contact-us">
    <button className="btn nav_btn"> تواصل معنا </button>
      </a>
    </div>

    </div>
  

    <div className="mobile_menu">

    {/* {scrolling ? (
      <Image
        src='/assets/icons/menus-black.png'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
        onClick={() => setDropDownShow(!dropDownShow) }
      />
   
    ) : (
      <Image
        src='/assets/icons/menus.png'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
        onClick={() => setDropDownShow(!dropDownShow) }
      />
   
    )} */}
    </div>
    </div>
    </div>


   </>
  )
}

export default Navbar