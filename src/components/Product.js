import "./Product.css";

export default function Product({ product }) {
  return (
    <div className="product">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
  );
}
