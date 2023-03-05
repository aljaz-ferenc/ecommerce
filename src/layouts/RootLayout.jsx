import React from 'react'
import { Outlet } from 'react-router'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Sidebar from '../components/Sidebar'

export default function RootLayout() {
  return (
    <>
          <Banner />
      <Slider />
      <Sidebar/>
    <Outlet/>
    </>
  )
}
