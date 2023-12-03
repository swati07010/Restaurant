import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const open = () => {
    navigate("/home");
  };
  return (
    <div className="decoration">
      <h1 style={{ textAlign: "center" }}>ABOUT US</h1>
      <div className="row">
        <div className="col-7">
          <img
            className="imag"
            src="https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?size=626&ext=jpg&ga=GA1.1.1085673919.1701545765&semt=sph"
          ></img>
        </div>
        <div className="col-5">
          <h2>What Makes Our Food Special?</h2>
          <h5>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
            Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
            Cupiditate. Ex, Vel?
          </h5>
          <br></br>
          <br></br>
          <h5>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet
            Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
            Obcaecati Sapiente?
          </h5>
          <button onClick={open}>Learn</button>
        </div>
      </div>
    </div>
  );
}

export default About;
