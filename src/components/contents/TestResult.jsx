import React from 'react'
import Title from '../Title'
import Layout from '../Layout'
import ResultSection from '../ResultSection'

export default function TestResult() {
  return (
    <div>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto text-white mb-10">
        <Title fontColor="text-white">RESULTS</Title>
        <p className='max-w-[70%] text-center mx-auto'>
        This section provides the results of your evaluation and the threshold for further inquiry/tests.
        </p>        
      </div>
      <Layout>
        <div className='pt-10'>
        <ResultSection
        part='Part I - Depression'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 2 - Anger'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 3 - Mania'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Severe'
        />
        <ResultSection
        part='Part 4 - Anxiety'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Slight'
        />
        <ResultSection
        part='Part 5 - Somatic Symptoms'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 6 - Suicidal Ideation'
        threshold='Threshold to guide further inquiry: Slight or greater'
        result='Slight'
        />
        <ResultSection
        part='Part 7 - Psychosis'
        threshold='Threshold to guide further inquiry: Slight or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 8 - Sleep Problems'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 9 - Memory'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 10 - Repetitive Thoughts and Behaviours'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 11 - Dissociation'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 12 - Personality Functioning'
        threshold='Threshold to guide further inquiry: Mild or greater'
        result='Mild'
        />
        <ResultSection
        part='Part 13 - Sleep Problems'
        threshold='Threshold to guide further inquiry: Slight or greater'
        result='Mild'
        />

        </div>
        
      </Layout>
    </div>
  )
}
