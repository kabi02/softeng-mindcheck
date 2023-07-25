import React, {useEffect, useState} from 'react'
import Title from '../Title'
import Layout from '../Layout'
import ResultSection from '../ResultSection'
import { auth, getUserData, ref, db, getAveragesData } from '../firebaseConfig';

const mapToResultString = (value) => {
  const mappings = [
    { start: 0, end: 0.9, result: 'None' },
    { start: 1, end: 1.9, result: 'Slight' },
    { start: 2, end: 2.9, result: 'Mild' },
    { start: 3, end: 3.9, result: 'Moderate' },
    { start: 4, end: Infinity, result: 'Severe' },
  ];

  // Find the matching range and return its result, or return a default string if not found
  const matchedMapping = mappings.find((mapping) => value >= mapping.start && value < mapping.end);
  return matchedMapping ? matchedMapping.result : 'Unknown';
};

export default function TestResult() {
  const [averagesData, setAveragesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Subscribe to Firebase auth state changes to wait for the user to be authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If there is a current user, fetch the user's averages data
        const uid = user.uid;
        getAveragesData(uid)
          .then((averagesData) => {
            if (averagesData) {
              // Set the averages data in state
              console.log(averagesData);
              setAveragesData(averagesData);
              setLoading(false); // Set loading to false since data has been fetched
            } else {
              console.error('No results data found.');
              setLoading(false); // Set loading to false even if no data is found
            }
          })
          .catch((error) => {
            console.error('Error fetching averages data:', error);
            setLoading(false); // Set loading to false in case of an error
          });
      } else {
        setLoading(false); // Set loading to false if there is no current user
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

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
          {loading ? (
            <div>Loading...</div>
          ) : averagesData ? (
            <>
              <ResultSection
              part='Part I - Depression'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._1part)}
              />
              <ResultSection
              part='Part 2 - Anger'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._2part)}
              />
              <ResultSection
              part='Part 3 - Mania'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._3part)}
              />
              <ResultSection
              part='Part 4 - Anxiety'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._4part)}
              />
              <ResultSection
              part='Part 5 - Somatic Symptoms'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._5part)}
              />
              <ResultSection
              part='Part 6 - Suicidal Ideation'
              threshold='Threshold to guide further inquiry: Slight or greater'
              result={mapToResultString(averagesData._6part)}
              />
              <ResultSection
              part='Part 7 - Psychosis'
              threshold='Threshold to guide further inquiry: Slight or greater'
              result={mapToResultString(averagesData._7part)}
              />
              <ResultSection
              part='Part 8 - Sleep Problems'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._8part)}
              />
              <ResultSection
              part='Part 9 - Memory'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._9part)}
              />
              <ResultSection
              part='Part 10 - Repetitive Thoughts and Behaviours'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._x10part)}
              />
              <ResultSection
              part='Part 11 - Dissociation'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._x11part)}
              />
              <ResultSection
              part='Part 12 - Personality Functioning'
              threshold='Threshold to guide further inquiry: Mild or greater'
              result={mapToResultString(averagesData._x12part)}
              />
              <ResultSection
              part='Part 13 - Sleep Problems'
              threshold='Threshold to guide further inquiry: Slight or greater'
              result={mapToResultString(averagesData._x13part)}
              />
            </>
          ) : (
            <div>No data available</div>
          )}
        <div className='sm:text-lg text-sm italic my-4 max-w-[50%] mx-auto text-center pb-20'>This measure is not a diagnosis or a full check-up of your mental health. It is only based on what you tell us and it may not be very accurate or the same as what others say. Your mental health can change depending on how you feel or what is happening in your life. If you are worried or unsure about your mental health, please talk to a professional who can help you.</div>
        
        </div>
        
      </Layout>
    </div>
  )
}
