import logo from "../assets/store-logo.jpg";

export default function LandingPage() {
  return (
    <main className="container">
      <div className="content">
        <h1>Your Online Store</h1>
        <p className="description">
          Trendy, comfortable, and affordable clothing for every style — shop
          the latest looks with ease.
        </p>
        <button className="landing-btn">Get started</button>
      </div>
      <div className="landing-image">
        <img src={logo} alt="logoImage" />
      </div>
    </main>
  );
}
