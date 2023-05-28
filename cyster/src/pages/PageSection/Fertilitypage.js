import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Fertilitypage = () => {
  return (
    <div className='fertilitypage'>
      <Navbar/>
      <div className='fertilitypage_body'>
        <h1 className='fertilitypage_heading'>PCOS- Fertility</h1>
        <div className='fertilitypage_content'>
          <p className='fertilitypage_p'>
          PCOS interrupts the normal menstrual cycle and makes it harder to get pregnant. 
          Between 70 and 80 percent of women with PCOS have fertility problems.<br></br>
          This condition can also increase the risk for pregnancy complications.<br></br>
          Women with PCOS are twice as likely as women without the condition to deliver 
          their baby prematurely. They’re also at greater risk for miscarriage, high 
          blood pressure, and gestational diabetes. <br></br>
          However, women with PCOS can get pregnant using fertility treatments that improve 
          ovulation. Losing weight and lowering blood sugar levels can improve your chances 
          of having a healthy pregnancy.<br></br>
          </p>
          <p className='fertilitypage_p'>To help you ovulate so that you can become 
          pregnant, your health care provider might recommend:</p>
          <ul className='fertilitypage_ul'>
            <li className='fertilitypage_li'><h3 className='fertilitypage_h3'>Clomiphene.</h3>
            This oral anti-estrogen medication is taken during the first part of your menstrual 
            cycle.</li>
            <li className='fertilitypage_li'><h3 className='fertilitypage_h3'>Letrozole (Femara).</h3>
            This breast cancer treatment can work to stimulate the ovaries.</li>
            <li className='fertilitypage_li'><h3 className='fertilitypage_h3'>Metformin.</h3>This medicine 
            for type 2 diabetes that you take by mouth improves insulin resistance and lowers insulin 
            levels. If you don't become pregnant using clomiphene, your provider might recommend adding 
            metformin to help you ovulate. If you have prediabetes, metformin can slow the progression 
            to type 2 diabetes and help with weight loss.</li>
            <li className='fertilitypage_li'><h3 className='fertilitypage_h3'>Gonadotropins.</h3>These hormone 
            medications are given by injection.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Fertilitypage