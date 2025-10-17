import CartProvider from "./context/CartProvider";
import ProductList from "./components/Productlist";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;