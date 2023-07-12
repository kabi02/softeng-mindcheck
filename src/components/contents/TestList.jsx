import React from 'react'
import Layout from '../Layout'
import Title from '../Title'
import '../../index.css'
import TR from '../TR'

// values of each row
const first=[
    {
        value: 'I.',
    },
    {
        value: 'Depression',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Depression—Adult (PROMIS Emotional Distress—Depression—Short Form)',
    },
]

const sec=[
    {
        value: 'II.',
    },
    {
        value: 'Anger',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Anger—Adult (PROMIS Emotional Distress—Anger—Short Form)',
    },
]

const third=[
    {
        value: 'III.',
    },
    {
        value: 'Mania',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Mania—Adult (Altman Self-Rating Mania Scale)',
    },
]

const four=[
    {
        value: 'IV.',
    },
    {
        value: 'Anxiety',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Anxiety—Adult (PROMIS Emotional Distress—Anxiety—Short Form)',
    },
]

const fifth=[
    {
        value: 'V.',
    },
    {
        value: 'Somatic Symptoms',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Somatic Symptom—Adult (Patient Health Questionnaire 15 Somatic Symptom Severity [PHQ-15])',
    },
]

const sixth=[
    {
        value: 'VI.',
    },
    {
        value: 'Suicidal Ideation',
    },
    {
        value: 'Slight or greater',
    },
    {
        value: 'None',
    },
]

const seven=[
    {
        value: 'VII.',
    },
    {
        value: 'Psychosis',
    },
    {
        value: 'Slight or greater',
    },
    {
        value: 'None',
    },
]

const eighth=[
    {
        value: 'VIII.',
    },
    {
        value: 'Sleep Problems',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Sleep Disturbance - Adult (PROMIS—Sleep Disturbance—Short Form)',
    },
]

const nine=[
    {
        value: 'IX.',
    },
    {
        value: 'Memory',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'None',
    },
]

const tenth=[
    {
        value: 'X.',
    },
    {
        value: 'Repetitive Thoughts and Behaviors',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'LEVEL 2—Repetitive Thoughts and Behaviors—Adult (adapted from the Florida Obsessive-Compulsive Inventory [FOCI] Severity Scale [Part B])',
    },
]

const xi=[
    {
        value: 'XI.',
    },
    {
        value: 'Dissociation',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'None',
    },
]

const xii=[
    {
        value: 'XII.',
    },
    {
        value: 'Personality Functioning',
    },
    {
        value: 'Mild or greater',
    },
    {
        value: 'None',
    },
]

const xiii=[
    {
        value: 'XIII.',
    },
    {
        value: 'Substance Use',
    },
    {
        value: 'Slight or greater',
    },
    {
        value: 'LEVEL 2—Substance Abuse—Adult (adapted from the NIDA-modified ASSIST)',
    },
]

export default function TestList() {
  return (
    <Layout>
        <Title>Adult DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure: domains, thresholds for further inquiry, and associated Level 2 measures for adults ages 18 and over</Title>
        <Title textSizeClass='sm:text-base text-sm' padding='pb-5'>
            Adult DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure: domains, thresholds for further inquiry, and associated Level 2 measures for adults ages 18 and over
        </Title>
        <table className=' w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1'>
            <tr className='tabletests'>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Domain</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Domain Name</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Threshold to guide further inquiry</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>DSM-5-TR Level 2 Cross-Cutting Symptom Measure available online</th>
            </tr>
            <TR infos={first} />
            <TR infos={sec} />
            <TR infos={third} />
            <TR infos={four} />
            <TR infos={fifth} />
            <TR infos={sixth} />
            <TR infos={seven} />
            <TR infos={eighth} />
            <TR infos={nine} />
            <TR infos={tenth} />
            <TR infos={xi} />
            <TR infos={xii} />
            <TR infos={xiii} />

        </table>
    </Layout>
  )
}
