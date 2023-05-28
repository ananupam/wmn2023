import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Causespage.css'

const Causespage = () => {
  return (
    <div className='causepage'>
        <Navbar/>
        <div className='causepage_body'>
            <h1 className='causes_heading'>PCOS- CAUSES</h1>
            <div className='causespage_intro'>
                <p className='Causespage_p'>
                PCOS is a problem with hormones that affects women during their childbearing 
                years (ages 15 to 44). Between 2.2 and 26.7 percent of women in this age group 
                have PCOS.
                </p><br></br>
                <p className='Causespage_p'>
                The word “polycystic” means “many cysts. These sacs are actually follicles, each 
                one containing an immature egg. The lack of ovulation alters levels of estrogen, 
                progesterone, FSH, and LH. Progesterone levels are lower than usual, while androgen 
                levels are higher than usual. The eggs never mature enough to trigger ovulation.
                Extra male hormones disrupt the menstrual cycle, so women with PCOS get fewer periods
                 than usual.
                </p><br></br>
                <p className='Causespage_p'>
                PCOS affects a woman's ovaries, the reproductive organs that produce estrogen 
                and progesterone — hormones that regulate the menstrual cycle. The ovaries 
                also produce a small amount of male hormones called androgens.
                </p>
                <br></br>
                <p className='Causespage_p'>
                PCOS is a “syndrome,” or group of symptoms that affects the ovaries and ovulation. 
                Its three main features are:
                </p>
                <ul className='Causespage_ul'>
                    <li className='Causespage_li'>cysts in the ovaries</li>
                    <li className='Causespage_li'>high levels of male hormones</li>
                    <li className='Causespage_li'>irregular or skipped periods</li>
                </ul>
            </div>
            <div className='causespage_causes'>
            <br></br>
                <p className='Causespage_p'>
                    The exact cause of PCOS is unknown. However, genes, insulin resistance, 
                    and inflammation have all been linked to excess androgen production.
                </p>
                <br></br>
            </div>
            <br></br>
            <div className='types'>
                <h1 className='Causespage_h1'> TYPES OF PCOS</h1>
                
                <ul className='Causespage_ul'>
                    <br></br>
                    <li className='Causespage_li'><h3 className='Causespage_h3'>INSULIN RESISTANT</h3>
                        <p className='Causespage_p'>It is the most common type of PCOS affecting nearly 70% of 
                            people. Insulin resistance is when the level of insulin is higher 
                            than normal in the body.
                        </p>
                        <p className='Causespage_p'>
                            This happens when our cells became a bit NUMB 
                            to the effects of insulin, a condition called insulinoma, 
                            which causes the pancreas to pump out more and more insulin 
                            until the cells get the message.
                        </p>

                    </li>
                    <br></br>
                    <li className='Causespage_li'><h3 className='Causespage_h3'>POST PILL</h3>
                        <p className='Causespage_p'>This type of PCOS occurs after stopping the intake of oral 
                            contraceptive pills. The artificial progestrone causes a party in 
                            the ovaries after the intake of pills is discontinued, which can cause PCOS 
                            due to a natural surge in androgens. Taking the pills can stop the 
                            symptoms temporarily but can worsen the condition once stopped.
                        </p> 
                        <p className='Causespage_p'>
                            In this type of PCOS there is no insulin resistance. This type of PCOS 
                            is a temporary situation and reversible. It can be helped by good and
                            regular sleeping schedule along with stress management.

                        </p>
                    </li>
                    <br></br>
                    <li className='Causespage_li'> <h3 className='Causespage_h3'>ADRENAL</h3>
                        <p className='Causespage_p'>This type of PCOS is due to an abnormal stress response and occurs during
                            a massive stressful period. Marekd indicators are high levels of cortisol 
                            and DHEA. DHEA's, another type of androgen from the adrenal glands, will be 
                            elevated alone and high levels of testostenedione are not seen. To test this 
                            type of androgen, one needs to go through an endocrinologist or oher specialist.
                        </p>
                        <p className='Causespage_p'>
                            The high level of insulin drives up androgen levels which causes issues like excess hair, 
                            male patttern hair loss and acne. 
                        </p>
                    </li>
                    <br></br>
                    <li className='Causespage_li'> <h3 className='Causespage_h3'>INFLAMATORY</h3>
                        <p className='Causespage_p'>This type of PCOS occurs due to chronic inflammation. Poor diet and 
                            unhealthy lifestyle lead to increased testosterone levels, which, 
                            eventually causes PCOS. High C reactive protein (more than 5), headaches, 
                            unexplained fatigue, skin issues like eczema are some of the symptoms.
                        </p>
                        <p className='Causespage_p'>
                            Maintaining good gut health by balancing bu bacteria, improving digestive 
                            enzymes and repairing leaky gut tissue. Avoiding food that triggers inflammation 
                            and taking anti-inflammatories such as turmeric, omega 3 fatty acids and 
                            antioxidants like NAC can be helpful.
                        </p>
                    </li>
                </ul>

            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Causespage