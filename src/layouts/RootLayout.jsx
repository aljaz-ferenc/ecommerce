import React from 'react'
import { Outlet } from 'react-router'
import Banner from '../components/Banner'
import Slider from '../components/Slider'

export default function RootLayout() {
  return (
    <>
          <Banner />
      <Slider />
    <Outlet/>
    </>
  )
}
