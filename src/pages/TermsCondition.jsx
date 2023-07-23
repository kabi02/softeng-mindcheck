import React from 'react'
import Header from '../Header'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default function TermsCondition() {
  return (
    <div>
        <Header/>
        <Layout>
            <Title>Terms and Conditions</Title>
            <div className='text-justify sm:max-w-[70%] max-w-[80%] mx-auto pb-28 -mt-3'>
                <p className='text-center font-bold'>Effective Date: July 22, 2023</p>
                <br/>
                <p>These Terms and Conditions govern your access to and use of MindCheck, a mental health assessment website, operated by Kirbliankennyong Dev. By accessing and using MindCheck, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
                <ol class="list-outside">
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>MindCheck Assessment:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>MindCheck provides mental health assessment tools and resources for informational purposes only. The results of assessments are not intended to replace professional medical or mental health advice, diagnosis, or treatment.</li>
                            <li className='mt-3'>We strongly advise users experiencing anxiety, depression, or any mental health issues to seek assistance from qualified healthcare professionals or licensed mental health practitioners</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>User Conduct:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>You agree to use MindCheck responsibly and refrain from engaging in any activities that may disrupt the website's functionality, compromise user data, or violate any applicable laws.</li>
                            <li className='mt-3'>You must not attempt to gain unauthorized access to any part of MindCheck or its users' data.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Intellectual Property:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>All content and materials on MindCheck, including text, graphics, logos, images, software, and design elements, are the property of Kirbliankennyong Dev., or its licensors and are protected by intellectual property laws.</li>
                            <li className='mt-3'>You may not reproduce, distribute, modify, or create derivative works based on any part of MindCheck without our explicit written consent.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Disclaimer of Warranties:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>MindCheck is provided on an "as-is" and "as-available" basis. We make no warranties or representations regarding the accuracy, completeness, or reliability of the content or services provided on the website</li>
                            <li className='mt-3'>We disclaim all warranties, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Limitation of Liability:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to the use of MindCheck or its content.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Indemnification:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>You agree to indemnify and hold harmless Kirbliankennyong Dev., and its affiliates from any claims, losses, damages, liabilities, costs, or expenses arising out of your use of MindCheck or any violation of these Terms and Conditions.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Termination:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>We reserve the right to suspend or terminate your access to MindCheck at any time for any reason without notice.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Governing Law:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>These Terms and Conditions shall be governed by and construed in accordance with the laws of the Philippines.</li>
                        </ol>
                    </li>
                    <li className='mt-8'>
                        <span className='font-bold sm:text-lg text-base'>Changes to Terms and Conditions:</span>
                        <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                            <li className='mt-3'>We may update these Terms and Conditions from time to time. The updated version will be posted on MindCheck, and the effective date will be indicated.</li>
                        </ol>
                    </li>
                </ol>
            <p className='mt-8'>By using MindCheck, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
            </div>
        </Layout>
      
    </div>
  )
}
