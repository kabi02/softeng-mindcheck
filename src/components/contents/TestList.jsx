import React from 'react'
import Layout from '../Layout'
import Title from '../Title'
import '../../index.css'

export default function TestList() {
  return (
    <Layout>
        <Title>Adult DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure: domains, thresholds for further inquiry, and associated Level 2 measures for adults ages 18 and over</Title>
        <Title textSizeClass='sm:text-base text-sm'>
            Adult DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure: domains, thresholds for further inquiry, and associated Level 2 measures for adults ages 18 and over
        </Title>
        <table className=' w-full sm:gap-2 sm:text-base text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1'>
            <tr className='tabletests'>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Domain</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Domain Name</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Threshold to guide further inquiry</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>DSM-5-TR Level 2 Cross-Cutting Symptom Measure available online</th>
            </tr>
            <tr className='tabletests text-white'>
                <td className='bg-[#9BA0BE] rounded-md sm:p-5 p-1'>I.</td>
                <td className='bg-[#9BA0BE] rounded-md sm:p-5 p-1'>Depression</td>
                <td className='bg-[#9BA0BE] rounded-md sm:p-5 p-1'>Mild or greater</td>
                <td className='bg-[#9BA0BE] rounded-md sm:p-5 p-1'>LEVEL 2—Depression—Adult (PROMIS Emotional Distress—Depression—Short Form)</td>
            </tr>
        </table>
    </Layout>
  )
}
