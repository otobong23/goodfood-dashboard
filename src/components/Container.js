import React from 'react'
import Grid1 from './Grids/Grid1'
import Grid2 from './Grids/Grid2'
import Grid3 from './Grids/Grid3'
import Grid4 from './Grids/Grid4'
import Grid5 from './Grids/Grid5'

export default function Container() {
  return (
    <div className="container max-w-full px-5 pt-5 md:pl-10 lg:pt-10">
      <h1 className="dashboard pb-10 text-[#1F384C] text-lg font-medium">Dashboard</h1>
      <div className='grid grid-flow-row grid-cols-1 gap-8 xl:gap-10 md:grid-col-2 xl:grid-cols-3 xl:grid-rows-2'>
      <Grid1 />
      <Grid2 />
      <Grid3 />
      <Grid4 />
      <Grid5 />
    </div>
    </div>
  )
}
