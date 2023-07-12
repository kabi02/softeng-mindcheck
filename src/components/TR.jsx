import React from 'react'

export default function TR({infos}) {
  return (
    <tr className='tabletests text-white'>
        {infos.map((info) => (
            <td className='bg-[#9BA0BE] rounded-md sm:p-5 p-1'>{info.value}</td>
        ))}
    </tr>
  )
}
