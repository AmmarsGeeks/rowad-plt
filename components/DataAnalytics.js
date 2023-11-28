'use client';
import React from 'react'
import Image from "next/image";


const DataAnalytics = () => {
  return (
    <div className='w-full who_we_are_section pb-8' >

        <div className='flex flex-col items-center justify-center ' >

        <div className="d-who items-center justify-between mt-8">
        <div className="box_orange px-2 py-2">
        <h1 className="heroarea_headline text-white">
        تحليل بيانات المنطقة
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

    <div className='mt-5' />
    <h1 className="text-white text-5xl"> منصة رواد </h1>
    <h4 className="text-lg color_orange mt-1">عـــرض مــلـــف تـــعــريــــفي بالمـنـصــة ٢٠٢٣
 </h4>

    <div className="d-who items-center justify-center ">

    <div style={{ flex: 0.5 }} >
    <h4 className="text-lg text-white mt-5 text-center">
    من خالل مـنـصـة رواد ستقوم باختيار مجال مشروعك ثم
سيعمل الذكاء االصطناعي على تحليل بيانات المشروع
وإظهار تنبؤ بأرباح المشروع اعتماًدا على تلك البيانات
)مثل : نوع المشروع - التنفيذ والتطوير (.
ستحقق هذه العملية توفير الكثير من الوقت واظهار نتائج
ناجحه.
 </h4>
    </div>

    <div className='m-2' >
    <Image
        src='/assets/images/graph.png'
        width={250}
        height={250}
        alt='loader'
        className='object-contain'
      />
    </div>

    </div>


        </div>

    </div>
  )
}

export default DataAnalytics