import React from 'react'
import PrivateRoute from '@/helper/PrivateRoute'
import MasterLayout from '@/components/masterLayout/MasterLayout'
import Progress from '@/components/Progress/Progress'

const page = () => {
    return (
        <PrivateRoute>
            <MasterLayout>
                <Progress />
            </MasterLayout>
        </PrivateRoute>
    )
}

export default page