import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  increment,
  decrement,
} from "../../features/productSlice";
import img from "../../assets/images/cart.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  console.log(products);



  if (products.length === 0) {
    return (
      <>
        <div className="text-center">
          <div>
            <img style={{ height: "400px" }} src={img} alt="" />
          </div>
          <div>
            <h2>Sizin səbətiniz boşdur</h2>
          </div>
          <Link to={"/collections"} className="btn btn-success">
            Alış-verişə başlayın
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div>
            <table class="table">
              <thead>
                <tr className="table-secondary fs-6">
                  <th className="text-center" scope="col">
                    Ad
                  </th>
                  <th scope="col">Kateqoriya</th>
                  <th scope="col">Qiymət</th>
                  <th>Miqdar</th>
                  <th>Sil</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => {
                  return (
                    <tr className="table-light fs-5">
                      <td className="d-flex  justify-content-evenly">
                        {item.title.slice(0, 30)}
                        <img
                          style={{ height: "200px" }}
                          src={item.image}
                          alt=""
                        />
                      </td>

                      <td>{item.category}</td>
                      <td>{item.price} AZN</td>
                      <td>
                       
                        <i
                          onClick={() => dispatch(increment(item.id))}
                          className="fa-solid fa-plus "
                          style={{ cursor: "pointer" }}
                        ></i>
                         <span className="mx-2 user-select-none">{item.count}</span>
                        <i
                          onClick={() => dispatch(decrement(item.id))}
                          className="fa-solid fa-minus"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                      <td>
                        <i
                          onClick={() => dispatch(deleteProduct(item.id))}
                          className="fa-solid fa-trash text-danger"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="bg-success p-3 text-white  d-flex  w-50 fs-5">
            Ümumi qiymət: {""}
            {products.reduce(
              (total, item) =>
                (Number(total) + item.price * item.count).toFixed(2),
              0
            )}
            {""} AZN
          </p>
        </div>
      </>
    );
  }
};
export default Cart;
