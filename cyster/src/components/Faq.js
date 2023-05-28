import React from 'react';
import './Faq.css';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div>
    <div className="faqbox">

      <p className='faqheading'>FAQs</p>

      <div className='faqs'>

        <details>
          <summary>What is PCOS?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>Polycystic ovary syndrome (PCOS) is a hormonal disorder that affects women.
           It is characterized by the presence of multiple small cysts on the ovaries, as well as other symptoms
            such as irregular menstrual cycles, infertility, excess hair growth, and acne.</p>
        </details>
        
        <details>
          <summary>What are the causes of PCOS?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>The exact cause of PCOS is unknown, but it is thought to be a combination
           of genetic and environmental factors.

.</p>
        </details>

        <details>
          <summary>How is PCOS diagnosed?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>PCOS is diagnosed based on a combination of symptoms, including irregular menstrual 
          cycles, excess hair growth, and infertility. A doctor may also order blood tests to check for hormone levels and insulin resistance.</p>
        </details>

        <details>
          <summary>What are the risks of PCOS?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>Mail to: nivesh@googlegroups.com</p>
        </details>

        <details>
          <summary>What are some lifestyle changes that can help manage PCOS?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>There are a number of lifestyle changes that can help manage PCOS, including Maintaining a healthy weight,
           Eating a healthy diet, Exercising regularly etc.</p>
        </details>

        <details>
          <summary>Have more doubts?</summary>
          <hr className='faqline'></hr>
          <p className='faqtext'>Check our guide section!</p>
        </details>
        <button type='submit'><Link to={`/guide`}>Go to Guide </Link></button>
        <button type='submit'><Link to={`/home`}>Go to Home </Link></button>
        
      </div>
      </div>
    </div>
  )
}

export default Faq