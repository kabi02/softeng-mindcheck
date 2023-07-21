import React from 'react'
import Title from "../Title";
import Layout from "../Layout";
import Question from "../Question"; // Import the Question component

export default function Test() {
  const questions = [
    {
      text: "Little interest or pleasure in doing things?",
      name: "p1-q1",
    },
    {
      text: "Feeling down, depressed, or hopeless? ",
      name: "p1-q2",
    },
  ];

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();
    // Loop through the questions and get the selected values
    questions.forEach((question) => {
      const selected = event.target[question.name].value;
      console.log(`${question.text}: ${selected}`);
    });
  };

  return (
    <>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto text-white">
        <Title fontColor="text-white">Instructions</Title>
        <p>
          The questions below ask about things that might have bothered you. For
          each question, circle the number that best describes how much (or how
          often) you have been bothered by each problem during the{" "}
          <b>past TWO (2) WEEKS</b> .
        </p>

        {/* button guides */}
        <div className="grid grid-cols-5 gap-4 my-7 items-center justify-center">
          <div className="text-center">
            <b>None</b>
            <br />
            (Not at all)
          </div>
          <div className="text-center">
            <b>Slight</b>
            <br />
            (Rare,less than a day)
          </div>
          <div className="text-center">
            <b>Mild</b>
            <br />
            (More than half a days)
          </div>
          <div className="text-center">
            <b>Moderate</b>
            <br />
            (Not at all)
          </div>
          <div className="text-center">
            <b>Severe</b>
            <br />
            (Nearly every day)
          </div>
        </div>
      </div>
      <Layout>
        <div className="text-center border-2 border-black py-10">
          {/* Part I */}
          <h3 className="sm:text-2xl text-lg font-bold">Part I.</h3>
          {/* Questions */}
          <form className="text-center font-bold py-3" onSubmit={handleSubmit}>
            {questions.map((question) => (
              // Use the Question component to render each question
              <Question question={question} />
            ))}
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

