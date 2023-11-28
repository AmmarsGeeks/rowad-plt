'use client';
import React from 'react'
import Image from "next/image";


const FeatureServices = () => {
  return (
    <div className='w-full our_branch_section pb-8' >

        <div className='flex flex-col items-center justify-center ' >

        <div className="d-who items-center justify-between mt-8">
        <div className="box_orange px-2 py-2">
        <h1 className="heroarea_headline text-white">
       الخدمات المستقبلية
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

    <div className='mt-5' >
    <h1 className="text-white text-5xl"> منصة رواد </h1>
    <h4 className="text-lg color_orange mt-1">عـــرض مــلـــف تـــعــريــــفي بالمـنـصــة ٢٠٢٣
 </h4>

    <div className="mt-5"></div>
 <div className="flex items-center mt-2">
    <div className="blocks_hero ml-2"></div>
    <h5 className="text-md text-white">
    الاشتراك في خدمة تحليل بيانات المتجر

</h5>
 </div>

 <div className="flex items-center mt-2">
    <div className="blocks_hero ml-2"></div>
    <h5 className="text-md text-white">الـحــد مــن مــخــاطــر فــشــل األعــمــال الــتــجــاريــة
</h5>
 </div>


    </div>
     

        </div>

   


    </div>
  )
}

export default FeatureServices