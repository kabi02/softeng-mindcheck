import React, { useState } from 'react'
import Header from '../Header'
import Layout from '../components/Layout'
import Title from '../components/Title'
import {ModalSignIn} from '../components/ModalAuth';

export default function Disclaimer() {
  // define a state variable for modal type
  const [modalType, setModalType] = useState("signin");

  // define a function that changes the modal type
  function handleSwitch(type) {
    setModalType(type);
  }
  return (
    <div>
        <Header/>
        <Layout>
            <Title>Disclaimer Notice</Title>
            <div className='text-justify sm:max-w-[70%] max-w-[80%] mx-auto pb-28 -mt-3'>
                <p className='text-center '>Welcome to MindCheck, a mental health assessment website, operated by Kirbliankennyong Dev. Before you begin answering the assessment, we kindly request that you read and acknowledge the following disclaimer:</p>
                <ol class="list-outside">
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Honesty and Accuracy:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>MindCheck is designed to provide you with valuable insights into your mental health. To ensure accurate results, we urge you to answer the assessment questions honestly and to the best of your ability. Dishonest or inaccurate responses may affect the reliability of the assessment outcomes.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Informational Purposes Only:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>The assessment provided by MindCheck is for informational purposes only and should not be considered a formal diagnosis or a substitute for professional medical or mental health advice. The results are intended to be a helpful starting point for self-awareness and understanding and are not a replacement for seeking guidance from qualified healthcare professionals.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Confidentiality and Anonymity:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>Your privacy is essential to us. Your assessment responses will be treated with the utmost confidentiality, and we will not share your individual data with any third parties without your explicit consent. However, please be aware that no internet-based platform can guarantee absolute data security.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Emergency Situations:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>If you are experiencing a mental health crisis, having thoughts of self-harm or harm to others, or require immediate assistance, do not rely on MindCheck. Instead, please seek immediate help by contacting emergency services or a mental health crisis hotline in your country.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Assessment Limitations:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>MindCheck has its limitations and may not capture all aspects of your mental health. The assessment is based on the information you provide, and the results should be interpreted with caution. If you have concerns about your mental health or well-being, we encourage you to consult a licensed mental health professional.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Age Restrictions:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>MindCheck is intended for users who are of legal age or who have obtained parental or guardian consent. If you are a minor, please obtain permission from a parent or legal guardian before using our services.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>No Professional Relationship:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>Participating in the MindCheck assessment does not establish a professional relationship between you and Kirbliankennyong Dev. We do not provide mental health counseling, therapy, or medical treatment through this platform.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Use Responsibly:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>By proceeding with the assessment, you agree to use MindCheck responsibly and understand that the results are not a substitute for professional advice or treatment. If you have any concerns about your mental health, please consult a qualified healthcare provider.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>User Responsibility:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>You are responsible for the accuracy and truthfulness of the information you provide during the assessment. Misrepresentation or providing false information may lead to inaccurate results.</li>
                        </ol>
                    </li>
                </ol>
                <p className='mt-8'>By clicking the <b>"Start Assessment"</b>, you acknowledge that you have read, understood, and agreed to the terms of this Disclaimer Notice. If you do not agree with any part of this disclaimer, please do not proceed with the assessment.</p>
                <p className='mt-8'>If you have any questions or concerns regarding this Disclaimer Notice or the use of MindCheck, please contact us at Mindcheck@gmail.com.ph.</p>

                {/* The button for opening modal */}
                <div className='flex mt-10 items-center justify-center'>                    
                    <ModalSignIn modalType={modalType} handleSwitch={handleSwitch} text='Start Assessment'/>
                </div>

            </div>
        </Layout>
      
    </div>
  )
}
