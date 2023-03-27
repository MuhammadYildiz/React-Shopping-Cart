import React, {useState} from 'react'
export default function ShoppingCart({ products,setCart,cart,}) {
  /* const disabled = cart.find((item)=>item.id === products.id) */
  const handleAdd = () => {
    setCart([...cart,products])
  }
  return (
    <div className=' rounded-2xl shadow-2xl shadow-zinc-900 pb-3 border-t-2 border-black'>
      <img src={products.productSrc} alt="" className=' rounded-t-2xl  border-b-2 h-48 w-60% m-auto p-3'  />
      <div className='m-10'>
        <p className='text-xl mb-2'>{products.productNanme} </p>
        <p>{products.productPrice} $ </p>
      </div>
      <button onClick={() => handleAdd(products)}  className='bg-blue-900 text-white px-6 py-2 text-center mx-auto mb-5 flex rounded-3xl hover:bg-blue-700'>Add To Basket</button>
    </div>
  )
}
