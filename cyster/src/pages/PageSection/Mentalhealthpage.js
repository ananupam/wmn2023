import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Mentalhealthpage = () => {
  return (
    <div className='mental'>
      <Navbar/>
      <div className='mental_body'>
        <h1 className='mental_heading'>PCOS- Mental health</h1>
        <div className='mental_content'>
          <p className='mental_p'>People with PCOS are about 3 times more likely 
          to experience depression and anxiety than people without PCOS; the reasons for 
          this are still unclear.<br></br>
          Medications and other therapies may be helpful for improving symptoms of depression 
          and anxiety.
          </p>
          <h3 className='mental_h3'>How is PCOS related to mental health?</h3>
          <p className='mental_p'>
          Polycystic ovary syndrome (PCOS) is a complex condition which impacts many aspects of a person’s health,
           including mental health. People who have been diagnosed with PCOS are about 3 times more likely to be 
           diagnosed with anxiety and depression than people without PCOS (1-3). <br></br>People 
           with PCOS are also much more likely to report symptoms of anxiety and depression 
           and those symptoms are more likely to be severe (3-5).<br></br>
           Most of the research on PCOS and mental health has focused on depression and anxiety, but it may also be 
           associated with an increased risk of obsessive compulsive disorder (OCD), bipolar disorder, 
           and eating disorders (3,6).<br></br>
          </p>
          <h3 className='mental_h3'>What treatments are available?</h3>
          <p className='mental_p'>People who have PCOS and feel depressed or anxious, or notice changes in their 
          mood, can talk to their healthcare provider about possible treatment options. There are many treatments 
          that may help with depression and anxiety.<br></br></p>
          <h3 className='mental_h3'>Lifestyle changes</h3>
          <p className='mental_p'>The effect of diet and exercise on symptoms of depression and anxiety in people 
          with PCOS has been researched. Low-calorie diets in combination with exercise do not appear to improve 
          symptoms of anxiety, and may only improve depression short-term.<br></br>
          Leading an active lifestyle in general may help improve mental health. People with PCOS who reported 
          exercising regularly had fewer symptoms of anxiety and depression , and those who said they did at 
          least 150 minutes of moderate exercise each week were less likely to be depressed.<br></br>
          </p>
          <h3 className='mental_h3'></h3>
          <p className='mental_p'>No studies have been done on anti-depressants or anti-anxiety medication for treating 
          people with PCOS specifically, but they may be prescribed in the same way they would be to people without PCOS. 
          Medications that help the body use insulin such as metformin may improve symptoms of depression in people with 
          PCOS. Metformin may also help with anxiety symptoms.<br></br>
          Taking omega-3 fatty acid from fish oil alone, or in combination with Vitamin D, may decrease symptoms of 
          depression and anxiety in people with PCOS.</p>
          <h3 className='mental_h3'>Complementary and alternative therapies</h3>
          <p className='mental_p'>There may be improvement in depression and anxiety among people with PCOS who receive acupuncture 
          and in people who practice mindfulness 30 minutes a day. Yoga practice that includes poses, guided relaxation, breathing 
          exercises, and meditation may also improve symptoms of anxiety in people with PCOS.<br></br>
          Some people with PCOS may experience an increase in facial hair. Depending on the culture they live in,
           they may feel self-conscious about it. For people with PCOS who feel distressed about facial hair, receiving laser hair 
           removal may improve symptoms of depression and anxiety.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Mentalhealthpage