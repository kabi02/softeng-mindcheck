import React from 'react'
import Layout from '../Layout'
import Title from '../Title'
import TR from '../TR'

export default function ScoringList() {
    // values of each row in first table
    const first=[
      {
        value: '0',
      },
      {
        value: 'None or Not at all',
      },
    ]
    const second=[
      {
        value: '1',
      },
      {
        value: 'Slight or Rare, Less than a day or two',
      },
    ]
    const third=[
        {
          value: '2',
        },
        {
          value: 'Mild or Several days',
        },
    ]
    const fourth=[
        {
          value: '3',
        },
        {
          value: 'Moderate or More than half the days',
        },
    ]
    const fifth=[
        {
          value: '4',
        },
        {
          value: 'Severe or Nearly every day',
        },
    ]
    // values of each row in 2nd table
    const first_2=[
        {
          value: '0 - 0.9',
        },
        {
          value: 'None',
        },
      ]
      const second_2=[
        {
          value: '1 - 1.9 ',
        },
        {
          value: 'Slight',
        },
      ]
      const third_2=[
          {
            value: '2 - 2.9',
          },
          {
            value: 'Mild',
          },
      ]
      const fourth_2=[
          {
            value: '3 - 3.9',
          },
          {
            value: 'Moderate',
          },
      ]
      const fifth_2=[
          {
            value: '4',
          },
          {
            value: 'Severe',
          },
      ]


  return (
    <Layout>
        <Title> SCORING GUIDE </Title>
        
        <div className="sm:max-w-[75%] max-w-[80%] mx-auto text-center sm:text-base min-[400px]:text-xs pb-14">
            <p>
            The DSM-5-TR L1-SR provides a general indication of the severity and frequency of mental health problems in adults aged 18 and over. The average score reflects the overall level of distress and impairment experienced by the patient across different domains. The higher the average score, the more likely the patient has significant mental health issues that require further evaluation and intervention.
            </p> <br/>
            <p>
            DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure consists of 13 psychiatric domains, such as depression, anger, mania, anxiety, somatic symptoms, suicidal ideation, psychosis, sleep problems, memory, eating problems, repetitive thoughts and behaviors, dissociation, personality functioning, and substance use.
            </p><br/>
            <p className='mb-7'>
            Each domain has different questions which has a total of 23 questions.
            Each question on the measure is rated on a 5-point scale and  inquires about how much (or how often) the individual has been bothered by the specific symptom during the past 2 weeks. Below is the assigned numerical value to each response according to the scale below:
            </p>
            <table className='w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1 sm:px-20 xl:px-60'>
                <tr className='tabletests'>
                    <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Score</th>
                    <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Interpretation</th>
                </tr>
                <TR infos={first} />
                <TR infos={second} />
                <TR infos={third} />
                <TR infos={fourth} />
                <TR infos={fifth} />
            </table><br/>
            <p className='mb-7'>
            Each items in each domain will calculate the total numerical value based on their response to get the total average on each domain. The range for identifying the average score in each domain is as follows:
            </p>
            <table className='w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1 sm:px-20 xl:px-60'>
                <tr className='tabletests'>
                    <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Score</th>
                    <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Interpretation</th>
                </tr>
                <TR infos={first_2} />
                <TR infos={second_2} />
                <TR infos={third_2} />
                <TR infos={fourth_2} />
                <TR infos={fifth_2} />
            </table><br/>
            <p className='text-center'>
            These ranges are not definitive or conclusive. They are meant to serve as guidelines for further clinical decision-making and not as the sole basis for making a diagnosis. The results of the DSM-5-TR L1-PG should be used to inform further assessment and  and not as the sole basis for making a diagnosis.
            </p>
        </div>
    </Layout>
  )
}
