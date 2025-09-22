import React, { useState, useEffect, useCallback } from "react";
import { FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "./css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ Memoized function to avoid infinite re-renders
  const loadCartAndWishlist = useCallback(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`);
      const savedWishlist = localStorage.getItem(`wishlist_${user.id}`);

      setCart(savedCart ? JSON.parse(savedCart) : []);
      setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
    }
  }, [user]);

  // Load cart and wishlist on component mount and when user changes
  useEffect(() => {
    if (user) {
      loadCartAndWishlist();
    }
  }, []);

  // Listen for storage changes to update counts in real-time
  useEffect(() => {
    const handleStorageChange = () => {
      if (user) {
        loadCartAndWishlist();
      }
    };

    window.addEventListener("cartUpdated", handleStorageChange);
    window.addEventListener("wishlistUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("cartUpdated", handleStorageChange);
      window.removeEventListener("wishlistUpdated", handleStorageChange);
    };
  }, [user, loadCartAndWishlist]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg px-3 px-md-4">
      <div className="container-fluid">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-light text-dark me-auto">
          <span className="h4">G</span>
          <span className="h6">ENT</span>
          <span className="h4">Z</span>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Nav Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/new-arrivals">
                New Arrivals
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-2 gap-md-3 flex-wrap">
            {user ? (
              <>
                <span className="fw-semibold text-dark d-none d-md-inline">
                  Welcome, {user.name ? user.name : user.email}!
                </span>
                <span className="fw-semibold text-dark d-md-none">
                  {user.name
                    ? user.name.split(" ")[0]
                    : user.email.split("@")[0]}
                </span>

                {/* USER only: Wishlist & Cart */}
                {user.role !== "ADMIN" && (
                  <>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => navigate("/user/cart")}
                      className="position-relative"
                    >
                      <FaShoppingCart />
                      {cart.length > 0 && (
                        <Badge
                          bg="danger"
                          pill
                          className="position-absolute top-0 start-100 translate-middle"
                        >
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </Badge>
                      )}
                    </Button>

                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => navigate("/user/wishlist")}
                      className="position-relative"
                    >
                      <FaHeart />
                      {wishlist.length > 0 && (
                        <Badge
                          bg="danger"
                          pill
                          className="position-absolute top-0 start-100 translate-middle"
                        >
                          {wishlist.length}
                        </Badge>
                      )}
                    </Button>
                  </>
                )}

                {/* Logout */}
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                  <FaSignOutAlt className="me-1 d-none d-md-inline" />
                  <span className="d-none d-md-inline">Logout</span>
                  <FaSignOutAlt className="d-md-none" />
                </Button>
              </>
            ) : (
              <>
                <Dropdown align="end">
                  <Dropdown.Toggle as={Button} variant="outline-primary" size="sm">
                    <span className="d-none d-md-inline">Login</span>
                    <span className="d-md-none">Login</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/login")}>
                      User Login
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/admin/login")}>
                      Admin Login
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/signup")}
                >
                  <span className="d-none d-md-inline">Register</span>
                  <span className="d-md-none">Sign Up</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



