import React from "react";
import Homebanner from "./Homebanner/Homebanner";
import Homeproducts from "./Homeproducts";

const Home = () => {
  const handlesend = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <Homebanner></Homebanner>
      <Homeproducts></Homeproducts>
      <hr />
      <h3 className="text-center">The health benefirts of our products</h3>
      <div
        className="accordion w-75 m-auto mt-3"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Lower Blood Pressure
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              Mushrooms are rich sources of potassium, a nutrient known for
              reducing the negative impact that sodium can have on your body.
              Potassium also lessens the tension in blood vessels, potentially
              helping to lower blood pressure.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Boost Immune System
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              The anti-inflammatory effect of mushrooms has been shown to
              greatly improve the efficiency of the immune system. Research has
              found that mushrooms help stimulate microphages in the immune
              system, enhancing its ability to defeat foreign bodies and making
              you less susceptible to serious illnesses.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Weight Loss
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              Long and short-term studies alike have found that mushrooms, in
              combination with exercise and other lifestyle changes, can have an
              important impact on weight loss. For example, after being asked to
              substitute 20 percent of their beef consumption with mushrooms,
              research participants showed improvements in their BMI and belly
              circumference. The antioxidants in mushrooms are also thought to
              reduce the risk of hypertension and other metabolic disorders.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h3 className="text-center">Become a supplier</h3>
      <form className="row g-3 mt-3" onClick={handlesend}>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Product name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Your name
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            About product
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="+8801xxxxxxxxx"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option defaultValue>Choose...</option>
            <option>Chittagong</option>
            <option>Dhaka</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12"></div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="w-100 btn btn-outline-success">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
