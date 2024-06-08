'use client'
import { checkout } from '@/app/actions/store'
import { clearCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function PlaceOrderScreen() {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    loading,
  } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const removeCartHandler = (formData) => {
    if(checkout(formData))
    {
      dispatch(clearCart())
    }
    else{

    }
  }


  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/store">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">

            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items:</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td>
                        <h1>{item.name}</h1>
                      </td>
                      <td className=" p-5 text-right">{item.qty}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.qty * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link className="default-button inline-block bg-green-200 p-2 mt-4 rounded shadow hover:bg-green-400" href="/store/cart">
                  Edit Items
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card  p-5 border border-green-200 rounded shadow">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <form action={removeCartHandler} className='flex gap-2 flex-col'>
                    <input required name="name" placeholder='First Name' className='rounded border p-2 border-green-200'></input>
                    <input required name="lastname" placeholder='Last Name' className='rounded border p-2 border-green-200'></input>
                    <input required name="email" placeholder='Email'className='rounded border p-2 border-green-200'></input>
                    <input required name='phone' placeholder='Phone Number' className='rounded border p-2 border-green-200'></input>
                    <button className="primary-button w-full bg-green-200 p-2 rounded shadow hover:bg-green-400">
                      Place Order
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
