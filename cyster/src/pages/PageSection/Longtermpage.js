import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Longtermpage = () => {
  return (
    <div className='longterm_page'>
      <Navbar/>
      <div className='longterm_body'>
        <div className='complications'>
          <h3>Complications of PCOS can include:</h3>
          <ul>

            <li><h3>Infertility</h3>
            <p className='long_p'>To get pregnant, you have to ovulate. Women who don’t
             ovulate regularly don’t release as many eggs to be fertilized. PCOS is one of 
             the leading causes of infertility in women</p></li>

             <li><h3 className='long_h3'>Sleep apnea</h3>
             <p className='long_p'>This condition causes repeated pauses in breathing during 
             the night, which interrupt sleep.<br></br>
             Sleep apnea is more common in women who are overweight — especially if they also 
             have PCOS. The risk for sleep apnea is 5 to 10 times higher in women who have both 
             obesity and PCOS than in those without PCOS.<br></br>
             </p> </li>

             <li><h3 className='long_h3'>Cancer of the uterine lining (endometrial cancer)</h3>
             <p className='long_p'>During ovulation, the uterine lining sheds. If you don’t ovulate 
             every month, the lining can build up.<br></br>
             A thickened uterine lining can increase your risk for endometrial cancer.<br></br>
             </p> </li>

             <li><h3 className='long_h3'>Metabolic syndrome</h3>
             <p className='long_p'>A cluster of conditions including high blood pressure,
              high blood sugar, and unhealthy cholesterol or triglyceride levels that 
              significantly increase your risk of heart and blood vessel (cardiovascular) disease.<br></br></p></li>

            <li>Gestational diabetes or pregnancy-induced high blood pressure</li>
            <li>Miscarriage or premature birth</li>
            <li>Nonalcoholic steatohepatitis — a severe liver inflammation caused by 
              fat buildup in the liver</li>
            
            <li>Type 2 diabetes or prediabetes</li>
            
            <li>Depression, anxiety and eating disorders</li>
            
          </ul>
          <p>Obesity commonly occurs with PCOS and can worsen complications of the disorder.</p>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Longtermpage