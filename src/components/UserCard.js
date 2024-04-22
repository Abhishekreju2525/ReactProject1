import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function UserCard() {
    const userContext=useContext(UserContext)
    const userData=userContext.userObj
  return (
    <div className='w-[100%] flex py-8 max-sm:px-0 max-lg:px-16 max-2xl:w-[70%] mx-auto justify-between align-middle flex-wrap gap-8 '>
        <div className=' flex-1 self-center'>
        <h1 className='text-4xl'>Welcome {userData.name}</h1><br />
        {/* <button className='px-4 py-2 rounded-md bg-blue-500 text-white font-bold'>View profile</button> */}

        </div>
        <div className='flex justify-center'>
            <img src={userData.avatar} alt="" className='rounded-full h-48' />
        </div>
    </div>
    
  )
}

export default UserCard