import React from "react";

// Define a component that takes a question prop
function Question({ question }) {
  return (
    <div className="my-9" key={question.name}>
      <label className="sm:text-lg text-sm">{question.text}</label>
      <div className="flex flex-wrap items-center gap-5 mx-auto justify-center mb-2 my-4">
        None
        <input
          type="radio"
          name={question.name}
          value="None"
          id={`${question.name}-None`}
          className="border-2 border-black w-10 h-10 transform scale-50 rounded-full"
        />
        <input
          type="radio"
          name={question.name}
          value="Slight"
          id={`${question.name}-Slight`}
          className="border-2 border-black w-10 h-10 transform scale-75 rounded-full"
        />
        <input
          type="radio"
          name={question.name}
          value="Mild"
          id={`${question.name}-Mild`}
          className="border-2 border-black w-10 h-10 transform scale-90 rounded-full"
        />
        <input
          type="radio"
          name={question.name}
          value="Moderate"
          id={`${question.name}-Moderate`}
          className="border-2 border-black w-10 h-10 transform scale-100 rounded-full"
        />
        <input
          type="radio"
          name={question.name}
          value="Severe"
          id={`${question.name}-Severe`}
          className="border-2 border-black w-10 h-10 transform scale-125 rounded-full"
        />
        Severe
      </div>
    </div>
  );
}

export default Question;
