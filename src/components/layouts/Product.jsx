import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addProduct } from "../../features/productSlice";
import data from "../../productdata";
import "../../Styles/product.css";
const Product = () => {
  const { productId } = useParams();
  const filteredData = data.productData?.find((item, index) => {
    return item.id === +productId;
  });

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);


  const addCart = () => {
    if (products.find((item) => item.id === Number(productId))) {
      setShow2(true);
      setTimeout(() => {
        setShow2(false);
      }, 1500);
    } else {
      setShow(true);
      dispatch(addProduct(filteredData));
      setTimeout(() => {
        setShow(false);
      }, 1500);
    }
  };

  const [image, setImage] = useState(filteredData.image);

  const getImage = (e) => {
    let src = e.target.src;
    setImage(src);
  };
  const [month, setMonth] = useState(6);
  const [result, setResult] = useState();

  useEffect(() => {
    setResult((filteredData.price / month).toFixed(1));
  });

  return (
    <div>
      <div className="container">
     <div className="row align-items-center">
     <div className="col-lg-6">
          <div className="d-flex align-items-center">
            <div>
              <img
                style={{ height: "400px" }}
                className="img-fluid"
                src={image}
                alt=""
              />
            </div>
            <div className="d-flex flex-column">
              <div>
                <img
                  onClick={getImage}
                  style={{ height: "100px", cursor: "pointer" }}
                  src={filteredData.image}
                  alt=""
                />
              </div>
              {filteredData.images.map(item => {
                  return <img onClick={getImage} style={{ height: "100px", cursor: "pointer" }} src={item} alt="" />
                })}

            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div>
            <label for="customRange2" class="form-label">
              <h3>Kredit Kalkulyatoru</h3>
            </label>
            <input
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              type="range"
              
              className="form-range"
              min="6"
              max="18"
              step="3"
              id="customRange2"
            />
            <p className="text-black fs-4">{month} Aylıq</p>
            <p className="bg-warning text-white p-2 rounded fs-4">
              Aylıq ödəniş: {month && result} AZN
            </p>
            <button onClick={addCart} className="btn btn-success  ">
            <i className="fa-solid fa-cart-shopping me-2"></i>   Səbətə at 
            </button>
          </div>
        </div>
     </div>

       <div className="mt-3">
       <h2>{filteredData.title}</h2>
        <h4 className="fs-3">{filteredData.price} AZN</h4>
       </div>
      </div>

      {show && (
        <div className="alertt bg-success ">
          <span>Səbətə əlavə olundu</span>
        </div>
      )}
      {show2 && (
        <div className="alertt bg-danger ">
          <span>Bu məhsul səbəttə mövcuddur</span>
        </div>
      )}
      <div className="container">
        <div className="row">
          <hr />
        <h5>Xüssiyyətlər</h5>
          <div className="col-lg-5 ">
           
            <ul className="list-group">
              {filteredData.info.key.map((item) => {
                return (
                  <li className="list-group-item list-group-item-primary list-group-item-action my-2 p-2 text">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-5">
            <ul className="list-group">
              {filteredData.info.value.map((item) => {
                return (
                  <li className="list-group-item list-group-item-primary list-group-item-action my-2 p-2 text">
                    {" "}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
