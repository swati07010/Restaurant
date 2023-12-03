import React, { useState } from "react";
import products from "./Productlist";

const Home = () => {
  const [items, setItems] = useState(products);

  const handleQuantityChange = (index, newQuantity) => {
    const newItems = [...items];
    newItems[index].quantity = newQuantity;
    setItems(newItems);
  };

  const handleTypeChange = (index, newType) => {
    const newItems = [...items];
    newItems[index].type = newType;
    setItems(newItems);
  };

  const calculateTotalPrice = (index) => {
    const { price, quantity, type } = items[index];
    return type === "half" ? (price / 2) * quantity : price * quantity;
  };

  const calculateOverallTotal = () => {
    return items.reduce(
      (total, item) => total + calculateTotalPrice(items.indexOf(item)),
      0
    );
  };

  return (
    <div className="decoration">
      <div className="row rowdec">
        {items.map((item, index) => (
          <div key={index} className="col-4">
            <img className="imge" src={item.image} alt={item.name}></img>
            <h5>Name: {item.name}</h5>
            <h5>Price: ${item.price}</h5>
            <h5>Review: 4.5</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 w-40 bg-success"
                onChange={(e) =>
                  handleQuantityChange(index, Number(e.target.value))
                }
                value={item.quantity}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                className="m-2 h-100 w-60 bg-success rounded"
                onChange={(e) => handleTypeChange(index, e.target.value)}
                value={item.type}
              >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 text-center">
                Total Price: ${calculateTotalPrice(index)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Nav initialItems={product} /> */}
      <div className="overall-total">
        <h3>Overall Price: ${calculateOverallTotal()}</h3>
      </div>
    </div>
  );
};

export default Home;
