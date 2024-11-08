import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { ShoppingCartContext } from '../../Context';


function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
  return (
    <Layout className='bg-red-100'>
        <h1>MyOrders</h1>
      { 
        context.order.map((order, index) => {
          <Link key={index} to={`/myorders/${order.id}`}>
            <OrdersCard 
              key={order.data}
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}
            />
          </Link>
        } )
      }
    </Layout>
  );
};

export { MyOrders };
