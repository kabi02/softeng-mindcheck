import React, {useEffect, useState} from 'react'
import Layout from '../Layout'
import Title from '../Title'
import TR from '../TR'
import { ResultModal } from '../ResultModal'
import { ResultContext } from '../ResultContext'
import { db, ref, get } from '../firebaseConfig'
import { getDatabase } from 'firebase/database'

export default function TableDashboard() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch all users' data from Firebase and update the state
    const fetchUsersData = async () => {
      try {
        const usersRef = ref(getDatabase(), 'users');
        const usersSnapshot = await get(usersRef);
        const usersData = usersSnapshot.val();

        if (usersData) {
          // Convert the usersData object to an array for easier iteration
          const usersArray = Object.entries(usersData).map(([userId, userData]) => ({
            userId,
            ...userData,
          }));
          setUsersData(usersArray);
        }
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsersData();
  }, []);


  return (
    <div>
    <Layout>
      <div className="sm:max-w-[80%] max-w-[90%] mx-auto">
        <Title>Dashboard</Title>
        <table className=' w-full sm:gap-2 sm:text-base min-[400px]:text-xs text-[0.50rem] mb-1 mt-2 border-separate md:border-spacing-6 sm:border-spacing-3 max-[390px]:border-spacing-1'>
          <thead>
              <tr className='tabletests'>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Name</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Contact Number</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Email</th>
                <th className='bg-[#F5F6FC] rounded-md sm:p-5 p-1'>Result</th>
              </tr>
          </thead>
          <tbody>
          {usersData.map((userData) => {
              // Check if the user is an admin, if yes, skip rendering their data
              if (userData.isAdmin) {
                return null;
              }

              // Continue rendering data for non-admin users
              const userName = userData.name || '';
              const contactNumber = userData.phone || '';
              const email = userData.email || '';
              const id = userData.userId;

              // You may need to access the relevant result data for the user from the userData object
              const resultData = [];

              return (
                <tr key={userData.userId} className="tabletests text-white">
                  <td className="rounded-md sm:py-2 sm:px-5 p-1 bg-[#9BA0BE]">{userName}</td>
                  <td className="rounded-md sm:py-2 sm:px-5 p-1 bg-[#9BA0BE]">{contactNumber}</td>
                  <td className="rounded-md sm:py-2 sm:px-5 p-1 bg-[#9BA0BE]">{email}</td>
                  <td>
                      <ResultModal user={userName} iden={userData.userId}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  </div>
  )
}
