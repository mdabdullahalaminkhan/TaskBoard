import React from 'react'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import Canceled from '@/components/Canceled/Canceled'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <Canceled />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page