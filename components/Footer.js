import React from 'react';
import Image from "next/image";




const Footer = (  ) => {




  return (
    <footer class="trendticket ">

    <div class="container-mid">


    <div class="flex_footer">

    <div className="logo_div">
    <Image
        src='/assets/logos/rowad-trans.png'
        width={120}
        height={90}
        alt='loader'
        className='object-contain'
      />
    </div>

    <div class="mt-2"></div>

<div class="footer_list" >

 
      <ul class="ul_footer">

      <a to="home" >
    <li>
      <a href="#home" >
        الرئيسية
      </a>
    </li>
  </a>

  <a to="initiatives" >
    <li>
      <a href="#initiatives" >
        المبادرات
      </a>
    </li>
  </a>

  

  <a to="blog" >
    <li>
      <a href="#blog" >
        المدونة
      </a>
    </li>
  </a>

  <a to="whoweare" >
    <li>
      <a href="#whoweare" >
        من نحن
      </a>
    </li>
  </a>

  <a to="faq" >
    <li>
      <a href="#faq" >
        الاسئلة الشائعة
      </a>
    </li>
  </a>

      </ul>
    

</div>
   <div class="mt-2"></div>
 
   <div class="action_footer" >

   <button class="btn footer_btn w-100">
         تواصل معنا
       </button>


   </div>

   </div>

   <div class="mt-1"></div>
<hr />
<div class="mt-1"></div>



    </div>

   

    </footer>
  )
}

export default Footer