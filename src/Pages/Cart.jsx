import { Delete } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    let cart_items= useSelector(store=>store.cartStore.cart_items)
    const dispatch = useDispatch()

    const removeItem=(item)=>{
        dispatch({type:"REMOVEITEM", payload:item})
        alert(item.title+" is removed")
    }

  return (
    <>
      <h1 className='text-3xl underline text-center mt-10'>Cart Items</h1>
      <table className='w-3/4 m-auto align-middle text-center border'>
        <thead className='bg-black text-white'>
            <tr>
                <td>S.No</td>
                <td>Movie Title</td>
                <td>Poster</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Action</td>
            </tr>
        </thead>

        <tbody>
            {
                cart_items.map((item,i)=>{
                    return <tr key={i} className='border border-gray-600'>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td><img src={item.image} className='h-48' alt="" /></td>
                        <td>Rs.{item.price}</td>
                        <td>1</td>
                        <td><button className='bg-red-500 hover:bg-red-400 active:bg-red-600 px-4 py-4 rounded-lg' onClick={()=>{
                            removeItem(item)
                        }}>Remove<Delete/></button></td>
                    </tr>
                })
            }

        </tbody>

      </table>
    </>
  )
}

export default Cart
