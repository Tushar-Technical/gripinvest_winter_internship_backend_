import { useEffect } from "react";
import "../css/landingpage.css";
import axios from "axios";


function Landingpage() {

    
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Grow Your Wealth with Smart Investments</h1>
          <p>
            Join our platform to invest, track your portfolio, and manage
            finances securely.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/400x250.png?text=Dashboard+Preview"
            alt="Investment dashboard"
          />
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
