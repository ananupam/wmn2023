import React from 'react';
import './Symptomspage.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Symptomspage = () => {
  return (
    <div className='symptomspage'>
      <Navbar/>
      <div className='symptomspage_body'>
      <h1 className='symptoms_heading'>PCOS- SYMPTOMS</h1>
        <div className='symptoms'>
        <h2 className='symptomspage_h2'> The common symptoms of PCOS may include:</h2>
        <ul className='symptomspage_ul1'>
        <li className='symptomspage_li1'>Infertility</li>
        <li className='symptomspage_li1'>Acne or oily skin</li>
          <li className='symptomspage_li1'>Missed periods, irregular periods, or very light periods</li>
          <li className='symptomspage_li1'>Ovaries that are large or have many cysts</li>
          <li className='symptomspage_li1'>Excess body hair, including the face, chest, stomach, and back (hirsutism)</li>
          <li className='symptomspage_li1'>Weight gain, especially around the belly (abdomen)</li>
          
          <li className='symptomspage_li1'>Male-pattern baldness or thinning hair</li>
          
          <li className='symptomspage_li1'>Small pieces of excess skin on the neck or armpits (skin tags)</li>
          <li className='symptomspage_li1'>Dark or thick skin patches on the back of the neck, in 
            the armpits, and under the breasts</li>
        </ul> 
        
       
          <br></br>
          
          <p className='symptomspage_p'>
            Doctors typically diagnose PCOS in women who have at least two of these three symptoms:
            <ul className='symptomspage_ul'>
              <li className='symptomspage_li'>
                <h3 className='symptomspage_h3'>High androgen levels</h3>
                <p className='symptomspage_p'>High levels of the hormone androgen may result in excess facial and body hair. 
                  This is called hirsutism. Sometimes, severe acne and male-pattern baldness can 
                  happen, too.
                </p>
              </li>

              <li className='symptomspage_li'>
                <h3 className='symptomspage_h3'>Irregular menstrual cycles</h3>
                <p className='symptomspage_p'>
                  Having few menstrual periods or having periods that aren't regular are common signs 
                  of PCOS. So is having periods that last for many days or longer than is typical for 
                  a period. For example, you might have fewer than nine periods a year. And those 
                  periods may occur more than 35 days apart. You may have trouble getting pregnant.
                </p>
              </li>

              <li className='symptomspage_li'>
                <h3 className='symptomspage_h3'>Cysts in the ovaries</h3>
                <p className='symptomspage_p'>
                Your ovaries might be bigger. Many follicles containing immature eggs may develop 
                around the edge of the ovary. The ovaries might not work the way they should.
                </p>
              </li>
            </ul> <br></br>
            Apart from that, your doctor may also ask whether you've had symptoms like acne, face 
            and body hair growth, and weight gain.
          </p>
          <h3 className='symptomspage_h3'>When to visit a Doctor?</h3>
          <p className='symptomspage_p'>
          See your health care provider if you're worried about your periods, if you're having trouble 
          getting pregnant, or if you have signs of excess androgen. These might include new hair growth 
          on your face and body, acne and male-pattern baldness.
          </p>
          
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Symptomspage