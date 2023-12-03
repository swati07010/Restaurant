import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Product() {
  const sum = () => {};
  return (
    <div className="decoration">
      <h1 style={{ textAlign: "center" }}>OUR PRODUCTS</h1>

      <div className="row rowdec">
        <div className="col-4">
          <div className="row">
            <div className="col-2 coldec">
              <a className="bi bi-cart "></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-heart"></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-eye"></a>
            </div>
          </div>
          <div className="row">
            <img src="https://img.freepik.com/premium-photo/ice-cream-with-fruits_777271-6044.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph"></img>
          </div>
          <div className="row">
            <div>
              <h5>Greate IceCream</h5>
            </div>
            <div>
              <img
                src="
              https://img.freepik.com/premium-vector/star-vector-icons-stars-collection-rating-golden-black-set-stars-isolated_151987-787.jpg"
                height={"80px"}
              ></img>
            </div>
            <div>
              <h4>$15.99-$20.99</h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-2 coldec">
              <a className="bi bi-cart"></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-heart"></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-eye"></a>
            </div>
          </div>
          <div className="row">
            <img
              src="
            https://img.freepik.com/free-photo/fresh-fruity-dessert-wooden-table-generated-by-ai_188544-19761.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph
            "
            ></img>
          </div>
          <div className="row">
            <div>
              <h5>Greate IceCream</h5>
            </div>
            <div>
              <img
                src="
              https://img.freepik.com/premium-vector/star-vector-icons-stars-collection-rating-golden-black-set-stars-isolated_151987-787.jpg"
                height={"80px"}
              ></img>
            </div>
            <div>
              <h4>$15.99-$20.99</h4>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-2 coldec">
              <a className="bi bi-cart"></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-heart"></a>
            </div>
            <div className="col-2 coldec">
              <a className="bi bi-eye"></a>
            </div>
          </div>
          <div className="row">
            <img
              src="
            https://img.freepik.com/free-photo/freshness-indulgence-gourmet-ice-cream-dessert-generative-ai_188544-9446.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph"
            ></img>{" "}
          </div>
          <div className="row">
            <div>
              <h5>Greate IceCream</h5>
            </div>
            <div>
              <img
                src="
              https://img.freepik.com/premium-vector/star-vector-icons-stars-collection-rating-golden-black-set-stars-isolated_151987-787.jpg"
                height={"80px"}
              ></img>
            </div>
            <div>
              <h4>$15.99-$20.99</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
