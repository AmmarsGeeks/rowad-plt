'use client';
import React from 'react'
import Image from "next/image";


const ContactUs = () => {
  return (
    <div className='w-full who_we_are_section pb-8' >

        <div className='flex flex-col items-center justify-center ' >

        <div className="d-who items-center justify-between mt-8">
        <div className="box_orange px-2 py-2">
        <h1 className="heroarea_headline text-white">
        تواصل معنا
      </h1>
        </div>
     

      <Image
        src='/assets/logos/rowad_2.png'
        width={250}
        height={250}
        alt='loader'
        className='object-contain'
      />
      </div>

    <div className='mt-5' >
    <h1 className="text-white text-5xl"> منصة رواد </h1>
    <h4 className="text-lg color_orange mt-1">عـــرض مــلـــف تـــعــريــــفي بالمـنـصــة ٢٠٢٣
 </h4>

    </div>
     

        </div>

        <div className="mt-10"></div>
 
    <div className="d-grid grid_four container-mid">

    <div className="single_item_contact flex-col items-center justify-center">
    <Image
        src='/assets/social/linkedin.png'
        width={80}
        height={80}
        alt='loader'
        className='object-contain'
      />
      <p className="hero_subheadline">  @ROWAD-PLT </p>
    </div>

    <div className="single_item_contact flex-col items-center justify-center">
    <Image
        src='/assets/social/twitter.png'
        width={80}
        height={80}
        alt='loader'
        className='object-contain'
      />
      <p className="hero_subheadline">  @R O W A D P L T </p>
    </div>

    <div className="single_item_contact flex-col items-center justify-center">
    <Image
        src='/assets/social/insta.png'
        width={80}
        height={80}
        alt='loader'
        className='object-contain'
      />
      <p className="hero_subheadline">  @plt.rowad </p>
    </div>

    <div className="single_item_contact flex-col items-center justify-center">
    <Image
        src='/assets/social/email.png'
        width={80}
        height={80}
        alt='loader'
        className='object-contain'
      />
      <p className="hero_subheadline">  rowad.plt@gmail.com </p>
    </div>
      


    </div>


    </div>
  )
}

export default ContactUs