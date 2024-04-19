import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Header() {
    const userContext=useContext(UserContext)
    const userDetails=userContext.userObj
  return (
   <header className='bg-blue-700 p-4 text-white flex justify-between'>
    Project manager 
<p>{userDetails.name}</p>
<button onClick={()=>{userContext.logoutUser();}}>Logout</button>

   </header>
  )
}
