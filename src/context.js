import React, { createContext, useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = createContext();
//Provider => Provide Information through all of the application
//Consumer => Whenever we want to use the information Consumer will be used

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // const productSetUp = () =>{
  //   let tempProducts = [];
  //   storeProducts.forEach(item=>{
  //     const singleItem = {...item};
  //     tempProducts = [...tempProducts, singleItem]
  //   })
  //   setProducts(tempProducts)
  // }

  const productSetUp = () => {
    let tempProducts = storeProducts.map((item) => {
      return { ...item }; // Create a shallow copy of each item
    });
    setProducts(tempProducts);
  };

  useEffect(() => {
    productSetUp();
  }, []);

  // const tester=()=>{ //is me hum ye dekhrhe hen key jab hum state ki value change krrhe hen to data product ki value bh kiu change horhi h ye is lie kiu ke hmne state me storeProdct ka reference dala hua ha na ke copy
  //   console.log('State Products: ', products[0].inCart)
  //   console.log('Data Products: ', storeProducts[0].inCart)

  //   const tempProducts = [...products]
  //   tempProducts[0].inCart=true;
  //   setProducts(tempProducts)
  // }

  // useEffect(() => {
  //   if (products.length > 0) {  // Ensure products is not empty
  //     console.log('State Products: ', products[0]?.inCart);  // Optional chaining to prevent errors
  //     console.log('Data Products: ', storeProducts[0]?.inCart);
  //   }
  // }, [products]);  // This effect runs whenever the products state changes

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    // console.log("Hello From Detail")
    const product = getItem(id);
    setDetailProducts(product);
  };

  const addToCart = (id) => {
    // console.log("Hello from add to card.id is" , id)
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    console.log(product);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts); //updated array ajaye (jisme value hmne change ki hui ha)
    setCart((prevCart) => [...prevCart, product]);
    // console.log(this.state)
  };

  // useEffect(()=>{
  //   addToCart();
  // },[cart])

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    product.count++;
    const price = product.price;
    // product.total += price;
    product.total= product.count*price;
    setCart(tempCart); //updated array ajaye (jisme value hmne change ki hui ha)
    // console.log(this.state)
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    const price = product.price;
    product.count--;

    if(product.count==0){
      removeItem(id);
    }

    else{
      product.total = product.count*product.price;
      setCart(tempCart); //updated array ajaye (jisme value hmne change ki hui ha)
      // console.log(this.state)
      addTotals();
    }
  };

  const removeItem = (id) => {
    // const updatedCart = cart.filter(item => item.id !== id); // Remove the item with the matching ID
    // setCart(updatedCart); // Update the state with the new cart
    // addTotals(); // Recalculate totals

    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id); // Remove the item with the matching ID
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
    // console.log(removedProduct)
  };

  const clearCart = () => {
    setCart([]); //cart list ko empty krdo
    productSetUp(); //update krdo meri product list ko
    addTotals(); //totals bh update krdo
  };

  const addTotals = () => {
    let subtotal = 0;
    cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    setCartSubTotal(subtotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  useEffect(() => {
    // console.log(products);
    // console.log(cart);
    // console.log(detailProduct);
    // addToCart();
    addTotals();
    console.log(cart);
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProducts,
        modalOpen,
        modalProduct,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {/* <button onClick={()=>tester()}>click</button> */}
      {children}
    </ProductContext.Provider>
  );
}

// const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider };

/*
import React, { createContext, useState } from 'react'
import { storeProducts, detailProduct } from './data';
const ProductContext = createContext();
//Provider => Provide Information through all of the application
//Consumer => Whenever we want to use the information Consumer will be used

function ProductProvider({children}) {
  const [products, setProducts] = useState(storeProducts);  
  const [detailProducts, setDetailProducts]= useState([detailProduct]);

  // const tester=()=>{ //hum kese original ke inCart ki value ko channge krte isi waja se humne ye method banaya takay jb bh butto pr click kren to wo state me bh update hojae or Original data me bh hojayega
  //   console.log('State Products: ', products[0].inCart)
  //   console.log('Data Products: ', storeProducts[0].inCart)

  //   const tempProducts = [...products]
  //   tempProducts[0].inCart=true;
  //   setProducts(tempProducts)
  // }

  // useEffect(()=>{
  //   console.log('State Products: ', products[0].inCart)
  //   console.log('Data Products: ', storeProducts[0].inCart)
  // },[products])  

  const handleDetail= () =>{
    console.log("Hello From Detail")
  }

  const addToCart = ()=>{
    console.log("Hello from add to cart")
  }

  return (
    <ProductContext.Provider value={{
      products, detailProducts, handleDetail: handleDetail, addToCart: addToCart 
    }}>
    {children}
    </ProductContext.Provider>
  )
}

// const ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductProvider}
 */
