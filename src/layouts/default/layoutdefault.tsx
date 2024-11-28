import React from 'react'
import Header from '../../components/base/header/header'
import Pagecontainer from '../../components/base/page-container/pagecontainer'
import { Outlet } from 'react-router-dom'

const DefaultLayout:React.FC = () => {
  return (
    <>
        <Header/>
        <Pagecontainer>
            <Outlet/>
        </Pagecontainer>

    </>
  )
}

export default DefaultLayout