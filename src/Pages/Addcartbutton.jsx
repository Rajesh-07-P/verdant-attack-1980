import { useState } from "react";

export default function AddButton() {
  let [count, setCount] = useState(0);
  // let [cartItems,setCartItems]=useState({});
  // let [itemCount,setItemCount]=useState(0);

  function handleClick(e) {
    // let x=e.target.parentNode.parentNode.children[1].children[0].innerText;
    setCount(count+1);
    // setCartItems({...cartItems,...{[x]:1}});
  }
  
  function updateCart(value){
    setCount(count+value);
    
  }
  // console.log(cartItems);

  return (
    <>
      {!count ? (
        <button
          onClick={handleClick}
          style={{
            color: "white",
            backgroundColor: "#D11243",
            border: "0px",
            padding: "15px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          ADD TO CART
        </button>
      ) : (
        <div>
          <button onClick={()=>updateCart(-1)} style={{ color:"#D11243", border:'0px',backgroundColor:'white', fontSize:'32px',alignItems:'baseline'}}>-</button>
          <button style={{ border:'0px',backgroundColor:'white',fontSize:'24px',}}>{count}</button>
          <button onClick={()=>updateCart(+1)} style={{ color:"#D11243", border:'0px',backgroundColor:'white', fontSize:'32px',alignItems:'baseline'}}>+</button>
        </div>
      )}
    </>
  );
}
