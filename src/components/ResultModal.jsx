import React, {useEffect, useState} from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ResultSection from '../components/ResultSection'
import { auth, getUserData, ref, db, getAveragesData } from './firebaseConfig';

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
 
export function ResultModal({user, iden}) {
  const [averagesData, setAveragesData] = useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Fetch the user's averages data from Firebase
    getAveragesData(iden)
      .then((averagesData) => {
        if (averagesData) {
          setAveragesData(averagesData);
        } else {
          console.error('No results data found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching averages data:', error);
      });
  }, [iden]);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer text-center">Show</div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-white rounded-lg py-7 justify-center bg-gradient-to-r from-[rgba(99,143,255,1)] to-[rgba(56,54,144,1)]">{user}'s Result</DialogHeader>
        <DialogBody divider className="scrollable-body">
          {averagesData && (
            <>
              {/* for multiple ResultSection */}
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
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="indigo" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}