import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  description,
  category,
  price,
  brand,
  quantity,
  noDetail
}) {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <strong>Price:</strong> Rs{price}
      </p>
      <Link to={`/product/${id}`}>See Item</Link>
    </>
  );
}
