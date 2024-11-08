import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart . Increment quantity
  const [count, setCount] = useState(0);
  
  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // CheckOut Side Menu . Open/Close
  const [isCheacoutSideMenuOpen, setIsCheacoutSideMenuOpen] = useState(false);
  const openCheacoutSideMenu = () => setIsCheacoutSideMenuOpen(true);
  const closeCheacoutSideMenu = () => setIsCheacoutSideMenuOpen(false);

  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart . Show Product
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      openCheacoutSideMenu,
      closeCheacoutSideMenu,
      isCheacoutSideMenuOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      order,
      setOrder
    }}>
      { children }
    </ShoppingCartContext.Provider>
  );
};