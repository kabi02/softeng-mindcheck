
import React, { useState } from 'react';

// Define a component that takes a question prop
function Question({ question }) {
  
  return (
    <div className="my-9" key={question.name}>
      <label className="sm:text-lg text-sm">{question.text}</label>
      <div className="flex flex-wrap items-center sm:gap-5 mx-auto justify-center mb-2 my-4 sm:text-base text-sm">
        None
        <input
          type="radio"
          name={question.name}
          value="0"
          id={`${question.name}-None`}
          className="border-2 border-black sm:w-10 sm:h-10 w-8 h-8 sm:m-0 -ml-8 transform sm:scale-50 scale-0 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="1"
          id={`${question.name}-Slight`}
          className="border-2 border-black sm:w-10 sm:h-10 w-8 h-8 sm:m-0 transform sm:scale-75 scale-50 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="2"
          id={`${question.name}-Mild`}
          className="border-2 border-black sm:w-10 sm:h-10 w-8 h-8 transform sm:scale-90 scale-75 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="3"
          id={`${question.name}-Moderate`}
          className="border-2 border-black sm:w-10 sm:h-10 w-8 h-8 transform sm:scale-100 scale-90 rounded-full"
          required
        />
        <input
          type="radio"
          name={question.name}
          value="4"
          id={`${question.name}-Severe`}
          className="border-2 border-black sm:w-10 sm:h-10 w-8 h-8 sm:m-0 ml-2 transform scale-125 rounded-full"
          required
        />
        <span className='ml-2 sm:ml-0'>Severe</span>
      </div>
    </div>
  );
}

export default Question;
