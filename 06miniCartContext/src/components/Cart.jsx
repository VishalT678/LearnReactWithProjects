import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2">
              <div>
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-600 ml-4">₹{item.price}</span>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full text-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;