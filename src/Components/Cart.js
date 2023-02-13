import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-5">
      <h1 className="text-3xl my-5 font-bold">
        Cart Page = {cartItems.length}
      </h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
