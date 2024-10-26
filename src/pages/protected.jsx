import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { userAuth } from '../contexts/auth'
 

function Protected() {

    const { currentUser } = userAuth()

    if(!currentUser || currentUser === null || undefined){
        return <Navigate to="login"/>
    }

    return <Outlet />
}

export default Protected