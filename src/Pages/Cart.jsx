export default function Cart() {
  return (
    <>
      <div
        style={{
          position:'absolute',
          backgroundColor: "white",
          marginLeft: "68%",
          width: "400px",
          padding:'20px',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <h2>Order Summary</h2>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{display:'flex',alignItems:'center'}}>
              <p>1.   </p>
              <h3>chicken curry cut</h3>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbdxe_HrgF18vLacr6_-TBaKeXfp7UJlu2g&usqp=CAU"
              style={{ width: "5%", height: "5%" }}
            ></img>
          </div>
        </div>
        <div style={{border:'1px dashed grey',lineHeight:'5px'}}> 
          <h3>Bill Details</h3>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Subtotal</p>
            <p>342</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Delivery Charge</p>
            <p>34</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <p>Discount</p>
            <p>0</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <h4>Total</h4>
            <p>₹:342</p>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <h2>Total: ₹</h2>
          <button style={{height:"40px",backgroundColor:"#D11243",borderRadius:'5px',border:'0px',color:'white',fontWeight:'bold',padding:'15px'}}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}
