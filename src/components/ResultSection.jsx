import React from 'react'

export default function ResultSection({part, threshold, result}) {
  return (
    <div className="text-center sm:max-w-[80%] max-w-[90%] mx-auto pb-10 ">
        <b className='sm:text-2xl text-lg font-bold my-9'>{part}</b>
        <div className='sm:text-lg text-sm my-4'>{threshold}</div>
        <div className='sm:text-xl text-base font-bold'>Your result: <span>{result}</span></div>
        <div className='h-[0.1rem] rounded-2xl mt-10 w-full bg-gray-500'></div>
    </div>
  )
}
