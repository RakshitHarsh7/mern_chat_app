import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div mt-auto>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
      ) : (<span className= "loaading loading loading-spinner"></span>

      )}
        
    </div>
  )
}

export default LogoutButton