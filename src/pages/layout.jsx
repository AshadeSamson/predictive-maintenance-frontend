import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

function Layout() {
  return (
    <>
    <Header />
    <section>
        <Outlet />
    </section>
    </>
  )
}

export default Layout