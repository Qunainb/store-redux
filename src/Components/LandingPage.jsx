import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/store-logo.jpg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function LandingPage() {
  const isAuth = useSelector((state) => state.isAuthenticated);
  const navigate = useNavigate();

  return (
    <main className="container">
      <div className="content">
        <h1>Your Online Store</h1>
        <p className="description">
          Trendy, comfortable, and affordable clothing for every style — shop
          the latest looks with ease.
        </p>
        <Link to="/login" className="landing-btn">
          Get started
        </Link>
      </div>
      <div className="landing-image">
        <img src={logo} alt="logoImage" />
      </div>
    </main>
  );
}
