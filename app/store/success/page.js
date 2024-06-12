'use client'

import { useDispatch } from 'react-redux'
import { clearCart } from '@/redux/slices/cartSlice'
import { navigate } from '@/app/actions/store'
import { useEffect } from 'react'



export default function ClientRedirect() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(clearCart())
        navigate()
    })

}