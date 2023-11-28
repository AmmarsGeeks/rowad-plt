'use client';
import React from 'react'
import Image from "next/image";


const OurBranch = () => {
  return (
    <div className='w-full our_branch_section pb-8' >

        <div className='flex flex-col items-center justify-center ' >

        <div className="d-who items-center justify-between mt-8">
        <div className="box_orange px-2 py-2">
        <h1 className="heroarea_headline text-white">
        الأعمال الرائدة
      </h1>
        </div>
     

      <Image
        src='/assets/logos/rowad_3.png'
        width={250}
        height={250}
        alt='loader'
        className='object-contain'
      />
      </div>

    <div className='mt-5' />
    <h1 className="text-white text-5xl"> منصة رواد </h1>
    <h4 className="text-lg color_orange mt-1">عـــرض مــلـــف تـــعــريــــفي بالمـنـصــة ٢٠٢٣
 </h4>

    <h4 className="text-lg text-white mt-5 text-center">
    احد خدمات مــنــصــة رواد هي عرض اعمال رائدة بمجاالت متنوعة
ومختلفة اعتماًدا على تحليل المنطقة واحتياجها ، مما يعني التجدد
المستمر في هذه الصفحة.
 </h4>


        </div>

    </div>
  )
}

export default OurBranch