import React from 'react'
import Layout from '../Layout'
import Title from '../Title'
import TR from '../TR'

export default function TableDashboard() {
    // values of each row
    const first=[
        {
            value: 'Ana Santos',
        },
        {
            value: '63 917 123-4567',
        },
        {
            value: 'Treatment Needed',
        },
        {
            value: 'Yes',
        },
    ]
  return (
    <div>
      <Layout>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto">
        <Title>Dashboard</Title>
        <table className=' w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1'>
            <tr className='tabletests'>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Name</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Contact Number</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Status</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Guidance Visit</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Result</th>
            </tr>
            <TR infos={first} />

        </table>
      </div>
      </Layout>
    </div>
  )
}
