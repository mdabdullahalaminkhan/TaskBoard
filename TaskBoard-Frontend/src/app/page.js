import React from 'react'
import Dashboard from '@/components/Dashboard/Dashboard'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import PrivateRoute from '@/helper/PrivateRoute'

const Home = () => {
  return (
    <PrivateRoute>
      <MasterLayout>
        <Dashboard />
      </MasterLayout>
    </PrivateRoute>

  )
}

export default Home