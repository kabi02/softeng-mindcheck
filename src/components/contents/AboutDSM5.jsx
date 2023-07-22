import React, { useState } from 'react'
import Layout from '../Layout'
import Title from '../Title'
import img from '../../assets/homepage_gfx_2.png'
import {ModalSignIn} from '../ModalAuth'

function AboutDSM5() {
  // define a state variable for modal type
  const [modalType, setModalType] = useState("signin");

  // define a function that changes the modal type
  function handleSwitch(type) {
    setModalType(type);
  }

  return (
    <Layout>
    <div className="flex flex-col items-center pb-10 justify-center sm:max-w-[80%] max-w-[90%] mx-auto gap-5"> 
        <Title>DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure</Title>
        <div className="flex md:flex-row flex-col gap-5 mx-auto min-w-lg-70% lg:w-[90%] items-center justify-center">
            <img src={img} className='w-[60%] max-w-sm-45% max-w-md-55% max-w-lg-75%' alt="" />
            <p className="sm:w-[70%] w-[90%] sm:text-base text-sm text-justify">
            This assessment is designed for helping you evaluate symptoms that could be related to various mental health conditions. Some of this symptoms includes anxiety, sleep deprivation, depression, and difficulty in concentrating.  <br /><br />
            Your test results will be based on your responses and will provide you insightful insights  regarding your mental health. The result will also indicate the areas that may require additional  analysis or attention </p>
        </div>
        {/* The button for opening modal */}
        <ModalSignIn modalType={modalType} handleSwitch={handleSwitch} />
    </div>
    </Layout>
  )
}

export default AboutDSM5
