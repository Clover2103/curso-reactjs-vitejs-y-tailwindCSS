import React from 'react';
import { ShoppingCartProvider } from '../../Context';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from '../MyOrders';
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { All } from "../All";
import { Clothes } from "../Clothes";
import { Electronics } from "../Electronics";
import { Furnitures } from "../Furnitures";
import { Toys } from "../Toys";
import { Other } from "../Other";
import { Navbar } from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRouters = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/All", element: <All /> },
    { path: "/Clothes", element: <Clothes /> },
    { path: "/Electronics", element: <Electronics /> },
    { path: "/Furnitures", element: <Furnitures /> },
    { path: "/Toys", element: <Toys /> },
    { path: "/Other", element: <Other /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
}


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRouters />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
