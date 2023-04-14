import { NavLink } from "react-router-dom";

export default function Header() {
  const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : ""
  });
  return (
    <>
      <h1>Product listing Page</h1>
      <nav style={{ fontWeight: "bolder" }}>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>{" "}
        ||{"  "}
        <NavLink to="/cart" style={getActiveStyle}>
          My Cart
        </NavLink>{" "}
        ||
        {"      "}
        <NavLink to="/wishlist" style={getActiveStyle}>
          My Wishlist
        </NavLink>
      </nav>
    </>
  );
}
