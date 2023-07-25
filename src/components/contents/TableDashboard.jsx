import React from 'react'
import Layout from '../Layout'
import Title from '../Title'
import TR from '../TR'
import { ResultModal } from '../ResultModal'
import { ResultContext } from '../ResultContext'

export default function TableDashboard() {

    // values of each row
    const result = [
      {
        part: "Part I - Depression",
        result: "Mild",
      },
      {
        part: "Part 2 - Anger",
        result: "Mild",
      },
      {
        part: "Part 3 - Mania",
        result: "Severe",
      },
      {
        part: "Part 4 - Anxiety",
        result: "Slight",
      },
      {
        part: "Part 5 - Somatic Symptoms",
        result: "Mild",
      },
      {
        part: "Part 6 - Suicidal Ideation",
        result: "Slight",
      },
      {
        part: "Part 7 - Psychosis",
        result: "Mild",
      },
      {
        part: "Part 8 - Sleep Problems",
        result: "Mild",
      },
      {
        part: "Part 9 - Memory",
        result: "Mild",
      },
      {
        part: "Part 10 - Repetitive Thoughts and Behaviours",
        result: "Mild",
      },
      {
        part: "Part 11 - Dissociation",
        result: "Mild",
      },
      {
        part: "Part 12 - Personality Functioning",
        result: "Mild",
      },
      {
        part: "Part 13 - Sleep Problems",
        result: "Mild",
      },
    ];
    const first = [
      {
        value: "Ana Santos",
      },
      {
        value: "63 917 123-4567",
      },
      {
        value: "kyut@gmail.com",
      },
    ];
    let userName = first[0].value;
    // add result prop to the ResultModal
    first.push({
      value: <ResultModal user={userName} result={result} />,
    });


  return (
    <div>
    <Layout>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto">
        <Title>Dashboard</Title>
        <table className=' w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1'>
          <tr className='tabletests'>
            <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Name</th>
            <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Contact Number</th>
            <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Email</th>
            <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Result</th>
          </tr>
          <ResultContext.Provider value={result}>
            <TR infos={first} />
          </ResultContext.Provider>
        </table>
      </div>
    </Layout>
  </div>
  )
}
