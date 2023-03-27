import React, { useState } from 'react';
import './App.css'
import ShoppingCart from './ShoppingCart'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import productsData from "./productsData"
function App() {
    const [cart, setCart] = useState([])
    const totalt = cart.reduce((acc, item) => acc + item.productPrice, 0)
    return (
        <div>
            <div className='flex justify-between items-center mx-5 md:mx-16 gap-2'>
                <h1 className='text-3xl mt-5'>React Shopping Crat</h1>
                <div className='mt-5 '>
                    {cart.length > 0 && <sub className='ml-4 translate-y-2 bg-red-600 text-white justify-center items-center  flex w-4 h-4 rounded-full'>{cart.length} </sub>}
                    <AiOutlineShoppingCart className='text-xl' />
                </div>
            </div>

            <div className={`flex flex-col  w-full mt-10 ${cart.length>0 ? "lg:flex-row-reverse" : "lg:flex-row"}  `}>
                {cart.length>0 && <div className=' rounded-2xl shadow-2xl shadow-zinc-900 pb-3 p-10 flex flex-col  justify-between  sm:w-80 border-2 m-5 ml-auto '>
                    <h3 className='text-2xl'>Basket</h3>
                    {cart.map((cartItem, index) => {
                        return (
                            <div key={index} className="flex justify-between my-2 border-b-2  ">
                                <p> {cartItem.productNanme} </p>
                                <p> {cartItem.productPrice} $</p>
                            </div>
                        )
                    })}
                    <h4 className='text-xl'>Totalt: {totalt} $</h4>
                    <button onClick={() => setCart([])} className='bg-red-900 text-white px-6 py-2 text-center mx-auto mt-5 flex rounded-3xl hover:bg-red-700'>Empty Basket</button>
                </div>}
                <div className="w-[85%] xl:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 ">
                {productsData.map((products) => {
                    return (
                        <div key={products.Id}>
                            <ShoppingCart products={products} setCart={setCart} cart={cart} />
                        </div>
                    )
                })}
            </div>
            </div>
            
        </div>
    )
}

export default App
