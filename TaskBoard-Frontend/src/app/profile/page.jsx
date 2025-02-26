import React from 'react'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import Profile from '@/components/Profile/Profile'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <Profile />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page