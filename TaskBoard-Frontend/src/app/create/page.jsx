import React from 'react'
import Create from '@/components/Create/Create'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <Create />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page