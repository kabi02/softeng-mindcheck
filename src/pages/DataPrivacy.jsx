import React from 'react'
import Header from '../Header'
import Title from '../components/Title'
import Layout from '../components/Layout'

export default function DataPrivacy() {
  return (
    <div>
      <Header/>
      <Layout>
        <Title>Data Privacy Policy</Title>
        <div className='text-justify sm:max-w-[70%] max-w-[80%] mx-auto pb-28 -mt-3'>
            <p className='text-center font-bold'>Effective Date: July 22, 2023</p>
            <br/>
            <p>This Data Privacy Policy outlines the procedures and practices of MindCheck, a mental health assessment website, operated by Kirbliankennyong Dev. In compliance with the data privacy laws of the Philippines. Our commitment is to safeguard the privacy and confidentiality of personal information provided by users ("you" or "your") on our platform. By accessing and using MindCheck, you agree to the terms described in this policy. If you do not agree with any part of this policy, please refrain from using our services.</p>

            <ol class="list-outside">
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Information We Collect:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>Personal Information: MindCheck may collect personal information from you when you voluntarily provide it during the registration process, assessment, or when using any interactive features. This may include your name, email address, age, gender, contact information, and other relevant details required for your assessment.</li>
                    <li className='mt-3'>Non-Personal Information: We may also collect non-personal information, such as anonymized and aggregated data about website usage, traffic patterns, and user behavior, which cannot be used to identify any individual.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Use of Information:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>Personal Information: We use your personal information to provide you with access to our mental health assessment services and resources. This includes sending assessment results, personalized recommendations, and updates related to your mental health.</li>
                    <li className='mt-3'>Non-Personal Information: Non-personal information is used for analytical purposes to improve the functionality and user experience of MindCheck.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Data Security:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Data Sharing and Disclosure:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>Your personal information will not be shared with any third parties without your explicit consent, except as required by law or as necessary to provide the services you requested.</li>
                    <li className='mt-3'>We may share anonymized and aggregated data with third parties for research, statistical analysis, and to improve our services. This data will not contain any personally identifiable information.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Retention of Information:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>We may share anonymized and aggregated data with third parties for research, statistical analysis, and to improve our services. This data will not contain any personally identifiable information.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>User Rights:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>You have the right to access, update, or delete your personal information. If you wish to do so, please contact us at MindCheck@gmail.com</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Cookies:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>MindCheck may use cookies or similar tracking technologies to enhance your experience on the website. You have the option to control or disable cookies through your browser settings.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Links to Third-Party Websites:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>MindCheck may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of these third-party sites before providing any personal information.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'>Updates to the Policy:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>We may update this Data Privacy Policy from time to time to reflect changes in our practices or for legal purposes. The updated version will be posted on MindCheck, and the effective date will be indicated.</li>
                  </ol>
                </li>
                <li className='mt-8'>
                  <span className='font-bold sm:text-lg text-base'> Contact Information:</span>
                  <ol class="list-disc list-outside ml-5 sm:text-base text-sm">
                    <li className='mt-3'>If you have any questions, concerns, or requests regarding this Data Privacy Policy or the handling of your personal information, please contact us at MindCheck@gmail.com.ph.</li>
                  </ol>
                </li>
            </ol>
            <p className='mt-8'>This Data Privacy Policy outlines the procedures and practices of MindCheck, a mental health assessment website, operated by Kirbliankennyong Dev. In compliance with the data privacy laws of the Philippines. Our commitment is to safeguard the privacy and confidentiality of personal information provided by users ("you" or "your") on our platform. By accessing and using MindCheck, you agree to the terms described in this policy. If you do not agree with any part of this policy, please refrain from using our services.</p>

        </div>
      </Layout>
    </div>
  )
}
