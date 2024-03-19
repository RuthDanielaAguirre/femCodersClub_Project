
import React from 'react'
import { Layout } from '../../../components/Layout/Layout'
import NavbarNoAuth from '../../../components/NavbarNoAuth'
import NavbarAuth from '../../../components/NavbarAuthUser'
import NavbarAuthAdmin from '../../../components/NavbarAuthAdmin'

const HomePage = () => {
  return (
    <Layout>
      {/* <NavbarNoAuth/> */}
      {/* <NavbarAuthUser/> */}
      <NavbarAuthAdmin />
      <div>HomePage</div>
    </Layout>
  )
}

export default HomePage