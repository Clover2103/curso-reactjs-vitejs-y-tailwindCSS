import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderCard } from '../../Components/OrderCard';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utilis/index.js';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './style.css';


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id);
    context.setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  }

  return (
    <aside  
      className={`${context.isCheacoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex-col z-50 fixed right-0 border border-black rounded-lg justify-between bg-white`}>
      <div >
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div>
            <XMarkIcon onClick={context.closeCheacoutSideMenu} className="size-6 text-black cursor-pointer" ></ XMarkIcon>
          </div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
          {
            context.cartProducts.map((product => (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title} 
                  imageUrl={product.images} 
                  price={product.price}
                  handleDelete={handleDelete}
                />
              ) 
            ))
          }
        </div>
      </div>
      <div className='px-6 mb-5'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button onClick={() => handleCheckout()} className='w-full bg-black py-3 mt-3 text-white rounded-lg'>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }