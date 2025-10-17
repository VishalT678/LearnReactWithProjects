import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
  { id: 4, name: "Mango", price: 50 }
];

function ProductList() {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-10">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;