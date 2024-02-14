import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './index.css'
import Dashboard, {MobileDashboard} from './components/Dashboard'
import Navbar from './components/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Container from './components/Container'

library.add(fas)

export default function App() {
  const [heightValue,setHeightValue] = useState(0);
  const [option,setOption] = useState(false)
  const setHeight = (value) => {
    setHeightValue(value)
  }
  const setOpt = () => setOption(prevOption => prevOption ? false : true)
  const resetOpt = () => setOption(false)
  return (
    <div>
      <div className="flex w-full content">
        <Dashboard />
        <div className="w-full col">
          <Navbar setFunc={setHeight} setOptionValue={setOpt} />
          <Routes>
            <Route path='/' element={<Container />} />
            <Route path='*' element={<>
            <div className='flex flex-col items-center justify-center h-full'>
              <h1>No Data Yet</h1>
              <h2>Be patient please</h2>
              <h3>The App is updating...</h3>
            </div>
            </>} />
          </Routes>
        </div>
      </div>
      <MobileDashboard value={heightValue} optionValue={option} resetOptionValue={resetOpt} />
    </div>
  )
}
