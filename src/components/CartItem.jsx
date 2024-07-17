
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="border-b-2 border-black  mt-5 mb-5">

      <div className="flex w-full">

        <div className="w-1/5 mx-4 my-4 flex items-center justify-center ">
          <img className="px-1" src={item.image} />
        </div>
        <div className=" flex flex-col justify-between w-4/5 my-3">
          <div><h1 className="font-bold text-lg mb-2">{item.title}</h1>
          <h1  className=" text-md">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1></div>
          <div className="flex mt-2 justify-between mr-4 ">
            <p className="text-green-600 font-bold">$ {item.price}</p>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-300"
            onClick={removeFromCart}>
              <MdDelete className="text-red-800" />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
