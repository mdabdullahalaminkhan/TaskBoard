'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { getToken } from '@/helper/SessionHelper';
import { ShowLoader } from '@/redux/stateSlice/Setting-slice';
import store from "../redux/store/Store";

const PrivateRoute = ({ children }) => {

    const router = useRouter();
    let token = getToken();
    useEffect(() => {
        if (token === null) {
            router.replace('/login');
        }
    }, [token]);

    if (token === null) {
        store.dispatch(ShowLoader())
    }

    return children;

};

export default PrivateRoute;
