import React from 'react'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import New from '@/components/New/New'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <New />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page