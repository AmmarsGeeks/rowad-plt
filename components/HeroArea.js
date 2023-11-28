import React from 'react'

const HeroArea = () => {
  return (
    <div className='w-full  box_headline h-96' >

    <div className='flex flex-col items-center justify-center h-96' >

    <div className=" mt-5 ">
      <h1 className="heroarea_headline text-white">
        <span className="color_orange">  منصة </span>
        رواد
      </h1>

     
    </div>
    <button className="btn btn_heroarea mt-8">
      البداية ..
    </button>
    <div>
    
    </div>

    <div className='flex items-center mt-8' >
      <div className="blocks_hero mx-2"></div>
      <div className="blocks_hero mx-2"></div>
      <div className="blocks_hero mx-2"></div>
    </div>

    <div className='mt-8' >
    <p className="hero_subheadline"> بقيادة : عمار حمدي حموش </p>
    </div>

    </div>



    </div>
  )
}

export default HeroArea