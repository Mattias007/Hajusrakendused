'use client'
 
import { useDispatch } from 'react-redux'
import { clearCart } from '@/redux/slices/cartSlice'
import { navigate } from '@/app/actions/store'



export default function ClientRedirect() {
    const dispatch = useDispatch()
    dispatch(clearCart())
    navigate()
    return (
        <div></div>
    )
}