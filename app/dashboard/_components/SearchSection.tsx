import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchChange}:any) => {
  return (
    <div className='p-10 rounded-lg bg-gradient-to-br from-purple-500 via-purple-700 to-blue-700 flex flex-col items-center justify-center gap-3'>
        <h2 className='text-4xl font-bold text-white'>Browse All Templates</h2>
        <p className='text-white'>What would like to create Today?</p>
        <div className='flex my-5 bg-white gap-2 p-2 rounded-lg border-gray-200 shadow-xl w-[50%]'>
            <Search className='text-primary'/>
            <input type="text" autoFocus={true} onChange={(e)=>onSearchChange(e.target.value)} className='outline-none bg-transparent text-black w-full' />
        </div>
    </div>
  )
}

export default SearchSection