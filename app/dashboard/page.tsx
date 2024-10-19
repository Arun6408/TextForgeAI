"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TempleteListSection from './_components/TempleteListSection'

const DashBoard = () => {
  const [userSearchInput,setUserSearchInput] = useState<string>("");
  const onSearchChange = (text:string) => {
    setUserSearchInput(text);
  }
  return (
    <div>
      <SearchSection onSearchChange={onSearchChange}/>
      <TempleteListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default DashBoard