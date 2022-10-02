import { Link } from "react-router-dom";

let list = [
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png",
    title: "Today's Deals",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
    id: "2",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
    id: "3",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
    id: "4",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to Cook",
    id: "5",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
    id: "6",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
    id: "7",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
    id: "8",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
    id: "9",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani&Kebab",
    id: "10",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png",
    title: "Combos",
    id: "11",
  },
  {
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Gourmet",
    id: "12",
  },
];

export default function Categories() {
  return (
    <>
    <div>
      <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8" style={{width:'100%'}}></img>
    </div>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h3>Shop by Categories</h3>
        <p>Freshest meat just for you</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {list.map((elem) => {
          return (
            <div>
              <Link
                to={`/categories/${elem.id}`}
                style={{ textDecoration: "none",color:'black'}}
              >
                <img src={elem.image} style={{ width: "90%" }}></img>
                <p>{elem.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
