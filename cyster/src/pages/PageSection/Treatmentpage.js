import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Treatmentpage = () => {
  return (
    <div className='treatmentpage'>
      <Navbar/>
      <div className='treatmentpage_body'>
      <h1 className='treatment_heading'>PCOS- Treatment</h1>
      <div className='treatment_content'>
        <p className='treatment_p'>PCOS treatment focuses on managing 
        the things that are concerning you. This could include infertility, 
        hirsutism, acne or obesity. Specific treatment might involve lifestyle 
        changes or medication.</p><br></br>
        <h3 className='treatment_h3'>Lifestyle Changes</h3>
        <p className='treatment_p'>Your health care provider may recommend weight loss 
        through a low-calorie diet combined with moderate exercise activities. Even a modest 
        reduction in your weight — for example, losing 5% of your body weight — might improve your 
        condition. Losing weight may increase the effectiveness of medications your provider recommends
         for PCOS, and it can help with infertility. Your health care provider and a registered dietitian
          can work with you to determine the best weight-loss plan.</p>
        <h3 className="treatment_h3">Medications</h3>
        <p className='treatment_p'>To regulate your periods, your health care provider might recommend:</p>
        <ul className='treatment_ul'>
          <li className='treatment_li'><h3 className='treatment_h3'>Combination birth control pills.</h3> Pills that contain both estrogen 
          and progestin decrease androgen production and regulate estrogen. Regulating your hormones 
          can lower your risk of endometrial cancer and correct irregular bleeding, excess hair growth and acne.</li>
          <li className='treatment_li'><h3 className='treatment_h3'>Progestin therapy.</h3> Taking progestin for 10 to 14 
          days every 1 to 2 months can regulate your periods and protect against endometrial cancer. This progestin 
          therapy doesn't improve androgen levels and won't prevent pregnancy. The progestin-only minipill or 
          progestin-containing intrauterine device is a better choice if you also wish to avoid pregnancy.</li>
        </ul>
        <p className='treatment_p'>To reduce excessive hair growth or improve acne, your health care provider might recommend:</p>
        <ul className='treatment_ul'>
          <li className='treatment_li'><h3 className='treatment_h3'>Birth control pills.</h3>These pills decrease androgen 
          production that can cause excessive hair growth and acne.</li>
          <li className='treatment_li'><h3 className='treatment_h3'>Spironolactone (Aldactone).</h3>This medication blocks 
          the effects of androgen on the skin, including excessive hair growth and acne. Spironolactone can cause birth 
          defects, so effective birth control is needed while taking this medication. This medication isn't recommended 
          if you're pregnant or planning to become pregnant.</li>
          <li className='treatment_li'><h3 className='treatment_h3'>Eflornithine (Vaniqa).</h3>This cream can slow facial 
          hair growth.</li>
          <li className='treatment_li'><h3 className='treatment_h3'> Hair removal.</h3> Electrolysis and laser hair removal 
          are two options for removing hair. Electrolysis uses a tiny needle inserted into each hair follicle. The needle 
          sends out a pulse of electric current. The current damages and then destroys the follicle. Laser hair removal 
          is a medical procedure that uses a concentrated beam of light to remove unwanted hair. You might need multiple 
          treatments of electrolysis or laser hair removal. Shaving, plucking or using creams that dissolve unwanted hair may 
          be other options. But these are temporary, and hair may thicken when it grows back.</li>
          <li className='treatment_li'><h3 className='treatment_h3'>Acne treatments.</h3>Medications, including pills and 
          topical creams or gels, may help improve acne. Talk to your health care provider about options.</li>
        </ul>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Treatmentpage