import React, { useState } from "react";
import Nav from "./Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
const Manu = () => {
  const initialItems = [
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA=",
    },
    {
      name: "Product 2",
      price: 150,
      quantity: 0,
      type: "half",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 3",
      price: 200,
      quantity: 0,
      type: "half",
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D",
    },
    {
      name: "Product 4",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 5",
      price: 150,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 6",
      price: 200,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76172.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/free-photo/boiling-cauldron-simmers-hearty-vegetable-soup-recipe-generated-by-ai_188544-10271.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/premium-photo/chicken-wings-grilled-baked-chicken-wings-with-sesame-seeds-ketchup-spicy-tomato-sauce-black-plate-black-dark-slate-stone-concrete-background-top-view-with-copy-space_253362-25123.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://img.freepik.com/premium-photo/traditional-indian-thali-wooden-table-generative-ai_849906-19306.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://media.istockphoto.com/id/184920188/photo/pepperoni-cheese-02.jpg?s=1024x1024&w=is&k=20&c=iJUGFhEPibC6gbOvwp6VGv5RDmXE2cKVJnnkpJFeWUY=",
    },
    {
      name: "Product 1",
      price: 100,
      quantity: 0,
      type: "half",
      image:
        "https://media.istockphoto.com/id/587885422/photo/birthday-candles-close-up-bokeh-background.jpg?s=1024x1024&w=is&k=20&c=UAs-AdIZ0B5Mo9dSKRUaxnQCu-Gks_ur2BCdxdqkBJQ=",
    },
  ];
  //My code

  const [items, setItems] = useState(initialItems);

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

      <div className="overall-total rowdec">
        <i className="bi bi-cart">-Overall Price: ${calculateOverallTotal()}</i>
      </div>
    </div>
  );
};

export default Manu;
