import { useState } from "react";

export default function Filter() {
  let [chickenFilter, setChickenFilters] = useState(false);

  function chickenFilters() {
    setChickenFilters(!chickenFilter);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px",
          gap: "15px",
          backgroundColor: "#f7f6f6",
        }}
      >
        <div
          style={{
            padding: "10px",
            border: "1px solid grey",
            borderRadius: "5px",
            gap:'5px',
          }}
        >
          Express Delivery
        </div>
        <div
          onClick={chickenFilters}
          style={{
            display: "flex",
            padding: "10px",
            border: "1px solid grey",
            cursor: "pointer",
            borderRadius: "5px",
            gap:'5px',
          }}
        >
          <div>Chicken Type</div>
          <img
            src="https://www.licious.in/img/rebranding/down_chevron.svg"
            style={{ width: "10px" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            border: "1px solid grey",
            borderRadius: "5px",
            gap:'5px'
          }}
        >
          <div>Best Suited For</div>
          <img
            src="https://www.licious.in/img/rebranding/down_chevron.svg"
            style={{ width: "10px" }}
          ></img>
        </div>
        <div
          style={{ display: "flex", padding: "10px", border: "1px solid grey",borderRadius:'5px',gap:'5px' }}
        >
          <div>Pack Size</div>
          <img
            src="https://www.licious.in/img/rebranding/down_chevron.svg"
            style={{ width: "10px" }}
          ></img>
        </div>
      </div>
      {chickenFilter ? (
        <div
          style={{
            display: "flex",
            gap: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            marginLeft: "15%",
            position: "absolute",
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px",
              border: "1px solid grey",
            }}
          >
            Broiler
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              border: "1px solid grey",
            }}
          >
            Country
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              border: "1px solid grey",
            }}
          >
            Kadknath
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
