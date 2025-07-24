import React from 'react'
import img1 from './images/img1.jpg';
const Landingpage = () => {
  return (
    <>
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-6">
      <img src={img1} className="img-fluid rounded-start" alt="..." /> 
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h3 className="card-title">Welcome To Tuition App</h3>
        <p className="card-text">Welcome to the Tuition App—your personal gateway to smarter learning and brighter futures! Whether you're gearing up for exams, brushing up on concepts, or exploring new subjects, this platform is designed to make your educational journey smoother and more engaging. With expert guidance, interactive tools, and tailor-made resources at your fingertips, you're never studying alone. Dive in, discover your strengths, and let’s make success a daily habit!</p>
        <h3>Courses Offered</h3>
        <h6>Core Academic Subject</h6>
        <ul>
          <li> Mathematics – From foundational skills to competitive prep</li>
          <li> English – Grammar, comprehension, speaking & writing</li>
          <li> Science – Physics, Chemistry, Biology simplified for clear understandin</li>
          <li> Social Studies – Engaging lessons in History, Geography, and Civics</li>
        </ul>
        <h6>Digital Literacy</h6>
<ul>
  <li>Computer Science – Basics of coding, web development & logical thinking</li>
  <li>Abacus & Vedic Math – Sharpen your speed and mental calculation skills</li>
</ul>

<h6>Communication & Development</h6>
<ul>
  <li>Spoken English – Fluency-building through interactive modules</li>
  <li>Personality Development – Confidence, etiquette, and interview readiness</li>
</ul>

<h6>Competitive & Board Prep</h6>
<ul>
  <li>CBSE / ICSE / State Board Support</li>
  <li>IIT-JEE & NEET Foundation</li>
  <li>Olympiad Training</li>
  <li>NTSE and Scholarship Exam Coaching</li>
</ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Landingpage