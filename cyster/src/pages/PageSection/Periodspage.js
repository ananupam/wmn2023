import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Periodspage = () => {
  return (
    <div className='periodspage'>
      <Navbar/>
      <div className='periods_body'>
        <h1 className='periods_heading'>PCOS- Periods</h1>
        <div className='periods_content'>
          <p className='periods_p'>
          Polycystic ovary syndrome (PCOS) is a problem with hormones that happens during 
          the reproductive years. If you have PCOS, you may not have periods very often. Or 
          you may have periods that last many days. You may also have too much of a hormone 
          called androgen in your body.<br></br>
          With PCOS, many small sacs of fluid develop along the outer edge of the ovary. These 
          are called cysts. The small fluid-filled cysts contain immature eggs. These are called 
          follicles. The follicles fail to regularly release eggs.<br></br>
          The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss 
          may lower the risk of long-term complications such as type 2 diabetes and heart disease.<br></br>
          Having few menstrual periods or having periods that aren't regular are common signs of PCOS. So is 
          having periods that last for many days or longer than is typical for a period. For example, you 
          might have fewer than nine periods a year. And those periods may occur more than 35 days apart. 
          You may have trouble getting pregnant.<br></br>
          See your health care provider if you're worried about your periods.<br></br>
          </p>
          <h3 className='periods_h3'>PCOS and Menopause</h3>
          <p className='periods_p'>PCOS affects many systems in the body.
           Many women with PCOS find that their menstrual cycles become more regular as they get closer to menopause. 
           However, their PCOS hormonal imbalance does not change with age, so they may continue to have symptoms of PCOS.<br></br>
           Also, the risks of PCOS-related health problems, such as diabetes, stroke, and heart attack, increase with age. These risks 
           may be higher in women with PCOS than those without.<br></br></p>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Periodspage