 import React, { useContext } from 'react'
 import { ProductContext } from '../../context';
 
 function CartItem({item}) {
  const {id, title, img, price, total, count} = item;
  // const {increment, decrement, removeItem} = value;
  const {increment, decrement, removeItem}  = useContext(ProductContext);
   return (
     <div className='row my-1 text-capitalize text-center'>
          <div className="col-10 mx-auto col-lg-2">
            <img src={img} alt="product" style={{
              width: '5rem', height:'5rem',
            }} className='img-fluid'/>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <span className=''>
              product : {title}</span>
          </div>  

          <div className="col-10 mx-auto col-lg-2">
            <span className=''>
              price : ${price}</span>
          </div>  

          <div className="col-10 mx-auto col-lg-2">
            <div className="d-flex justify-content-center">
              <span className='btn btn-black mx-1'
              onClick={()=>decrement(id)}>
              -
              </span>

              <span className='btn btn-black mx-1'>{count}</span>

              <span className='btn btn-black mx-1'
              onClick={()=>increment(id)}>
              +
              </span>
            </div>
          </div>  

          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
                <i className='fas fa-trash'></i>
            </div>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <strong>
              item total : ${total}
              </strong>
          </div>  


          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"></div>
     </div>
   )
 }
 
 export default CartItem