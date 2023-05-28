import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Sexualhealthpage = () => {
  return (
    <div className='sexualhealthpage'>
      <Navbar/>
      <div className='sexualhealthpage_body'>
        <h1 className='sexualhealthpage_heading'>PCOS- Sexual health</h1>
        <div className='sexualhealthpage_content'>
          <p className='sexual_p'>Symptoms of PCOS (polycystic ovary syndrome) 
          such as weight gain, excess hair, hair loss, acne and problems with fertility can
           affect your relationships with others and your sex life.<br></br>
           Talking about PCOS with your partner can be difficult, but it can also be a relief 
           to have someone close to you understand what you are going through and support you 
           along the way. Taking your partner to medical appointments can be a good way of increasing 
           their understanding of your condition and the symptoms you are experiencing.<br></br>
          Let your partner know how they can help and support you.<br></br>
          Having healthy and satisfying sexual relationships can be important to overall health and 
          happiness. Many factors influence sexual function, including mood, general wellbeing, self-esteem, 
          medications and past sexual experiences. Studies suggest that women tend to have a higher risk 
          for problems with sexual function compared to men. The most commonly reported problem is a lowering 
          of sexual desire.<br></br>
          <h3 className='sexual_h3'>PCOS and sex</h3>
          Women with PCOS report more problems with sexual function. This can be related to some of the symptoms 
          of PCOS, such as being overweight, or acne or excess facial or body hair growth (hirsutism).<br></br>
          Psychological factors in PCOS also contribute significantly, including lowered mood or wellbeing, lower 
          levels of self-confidence or self-esteem, and the impact of having a chronic condition. Having negative 
          feelings about your body can create difficulties during intimate moments with another person.<br></br>
          A number of research studies have found that women with PCOS are less satisfied when it comes to their sex 
          lives. It was shown that hirsutism and being overweight, in particular, cause women to feel less sexual. Other 
          researchers suggest this also has an impact on relationships.<br></br>
          If you feel that PCOS is affecting your sex life and relationship it is important to talk to your doctor. With 
          the right support these issues can be improved, helping you to have a satisfying sexual relationship.<br></br>
          <h3 className='sexual_h3'>PCOS and contraception</h3>
          If you have PCOS and need contraception, it is best to discuss the options with your doctor, as treatment for your 
          PCOS may go hand in hand with a method of contraception, such as the oral contraceptive pill.<br></br>
          </p>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Sexualhealthpage