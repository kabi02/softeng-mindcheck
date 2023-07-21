
import React, { useState } from 'react';

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
          value="0"
          id={`${question.name}-None`}
          className="border-2 border-black w-10 h-10 transform scale-50 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="1"
          id={`${question.name}-Slight`}
          className="border-2 border-black w-10 h-10 transform scale-75 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="2"
          id={`${question.name}-Mild`}
          className="border-2 border-black w-10 h-10 transform scale-90 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="3"
          id={`${question.name}-Moderate`}
          className="border-2 border-black w-10 h-10 transform scale-100 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="4"
          id={`${question.name}-Severe`}
          className="border-2 border-black w-10 h-10 transform scale-125 rounded-full"
          required
        />
        Severe
      </div>
    </div>
  );
}

export default Question;
