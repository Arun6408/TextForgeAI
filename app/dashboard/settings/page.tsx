import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex w-full items-center justify-center'>
        <UserProfile/>
    </div>
  )
}

export default Settings