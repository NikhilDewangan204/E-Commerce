import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="mr-20 ml-20">
  {
    cart.length > 0  ? 
    (<div className=" flex w-2/3 gap-10 mx-auto" >


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col mt-6 mb-6 justify-between">

        <div>
          <div className="text-green-600 font-bold text-lg uppercase">Your Cart</div>
          <div className="text-green-600 font-bold text-4xl uppercase mb-2">Summary</div>
          <p className="font-bold text-md">
            <span >Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="font-bold text-md">Total Amount:  $ {totalAmount}</p>
          <button className="bg-green-500 px-5 py-2 rounded-full border-black border-2 mt-4 font-semibold hover:bg-green-600 hover:scale-110 transition-all transition-900 mb-5 text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className=" h-[100vh] flex flex-col items-center justify-center ">
      <h1 className="font-semibold text-lg">Your cart is empty!</h1>
      <Link to={"/"}>
        <button className="bg-green-500 px-5 py-2 rounded-full border-black border-2 mt-4 font-semibold hover:bg-green-600 hover:scale-110 transition-all transition-900">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
