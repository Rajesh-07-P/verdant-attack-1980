import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";

export default function Navbar() {
  let [cart, showCart] = useState(false);

  function cartbutton() {
    showCart(!cart);
  }

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          padding: "30px 10px 10px 10px",
        }}
      >
        <div style={{}}>
          <Link to="/">
            <img src="https://www.licious.in/img/rebranding/licious-logo.svg" />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <img
              style={{ width: "30px" }}
              src="https://www.licious.in/img/rebranding/location_icon.svg"
            ></img>
          </div>
          <div style={{ marginLeft: "0px" }}>
            <span style={{ opacity: "50% " }}>Hyderabad</span>
            <br />
            <span>Hitech City,Hyderabd</span>
          </div>
        </div>
        <div
          style={{
            width: "400px",
            height: "40px",
            borderRadius: "5px",
            border: "1px solid #eaeaea",
            backgroundColor: "#f8f8f8",
            cursor: "pointer",
          }}
        >
          <input
            placeholder="Search for any delicious product"
            style={{
              border: "0px",
              width: "92%",
              fontSize: "18px",
              cursor: "pointer",
            }}
          ></input>
          <img
            src="https://www.licious.in/img/rebranding/search_icon.svg"
            style={{ marginTop: "10px", verticalAlign: "-30%" }}
          ></img>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
            style={{
              width: "30%",
              height: "20px",
              marginTop: "12px",
              marginRight: "5px",
            }}
          />
          <p
            style={{
              marginBottom: "20px",
              paddingBottom: "0px",
            }}
          >
            Categories
          </p>
        </div>
        <div style={{}}>
          <img src="https://www.licious.in/img/rebranding/profile_icon.svg"></img>
          <a>Login</a>
        </div>
        <div style={{ display: "flex" }} onClick={cartbutton}>
          <div>
            <img src="https://www.licious.in/img/rebranding/cart_icon.svg"></img>
          </div>
          <div>
            <span>Cart</span>
            <p style={{ margin: "0px" }}>₹0</p>
          </div>
        </div>
      </div>
      {cart ? <Cart /> : ""}
    </>
  );
}
