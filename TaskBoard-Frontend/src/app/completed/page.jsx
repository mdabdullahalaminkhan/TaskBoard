import React from 'react'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import Completed from '@/components/Completed/Completed'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <Completed />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page