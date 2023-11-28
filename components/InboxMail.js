import React  from 'react';


const InboxMail = () => {

  return (
    <div class="relative h-72 overflow-hidden" style={{ background: "url('https://eltahiq.web.app/images/contact_banner.png')" }}  >
    <div className="flex-col  mx-12 pt-5">
    
    <div className="mt-8"></div>
      <h1 className="hero_headline_sm mb-12"> توصل بكل جديد!
   </h1>

      <div className="flex_subscripe pb-5">
      <input
                       type="text"
                       id="contacer_subject"
                       name="contacer_subject"
                       className="bg-white input_form w-2/3"
                       placeholder="بريدك الالكتروني"
   
                     />
   

      </div>
   
    </div>
   
   </div>
  )
}

export default InboxMail