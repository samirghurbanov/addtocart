import React, {  useState } from "react";
import { Link } from "react-router-dom";
import data from "../../productdata";
import Itemcard from "../layouts/Itemcard";
import "../../Styles/collections.css";
const Collections = () => {
  const [value, setValue] = useState("");

  const [category, setCategory] = useState("");

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  console.log(category);
  return (
    <div className=" container">
      <div className="d-flex align-items-center">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form-control my-3"
          placeholder="Search products..."
        />
        <select
          className="form-select  w-25"
          onChange={handleCategoryChange}
          name=""
          id=""
        >
          <option value="All">All</option>
          <option value="Telefonlar">Telefonlar</option>
          <option value="Saatlar">Saatlar</option>
          <option value="Qulaqcıqlar">Qulaqcıqlar</option>
          <option value="Noutbuklar">Noutbuklar</option>
        </select>
      </div>
      <div className="row d-flex ">
        {data.productData
          .filter((product) => {
            if (category === "All") {
              return product;
            } else if (category) {
              return product.category === category;
            } else if (value === "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(value.toLowerCase())
            ) {
              return product;
            }
          })
          .map((item) => {
            return (
              <Link
                className="col-11 col-md-6 col-lg-3 text-decoration-none text-black"
                to={`/product/${item.id}`}
              >
                <Itemcard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Collections;
