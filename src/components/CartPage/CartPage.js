import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleInputField = (e) => {
    console.log("gfkfjj", e.target.value);
  };

  const handleAddItem = () => {
    dispatch({ type: "INC_QUANTITY", payload: item });
  };

  const handleMinusItem = () => {
    dispatch({ type: "DEC_QUANTITY", payload: item });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CART_ITEM_ROW", payload: item });
  };
  return (
    <>
      <tr>
        <td class="image" data-title="No">
          <img src={item.image} alt="#" />
        </td>
        <td class="product-des" data-title="Description">
          <p class="product-name">
            <a href="#">Women Dress</a>
          </p>
          <p class="product-des">
            Maboriosam in a tonto nesciung eget distingy magndapibus.
          </p>
        </td>
        <td class="price" data-title="Price">
          <span>{`$${item.price}`} </span>
        </td>
        <td class="qty" data-title="Qty">
          <div class="input-group">
            <div class="button minus">
              <button
                type="button"
                class="btn btn-primary btn-number"
                data-type="minus"
                data-field="quant[1]"
                onClick={() => handleMinusItem(item)}
              >
                <i class="ti-minus"></i>
              </button>
            </div>
            <input
              type="text"
              name="quant[1]"
              class="input-number"
              data-min="1"
              data-max="100"
              value={item.quantity}
              //   handleInputField={handleInputField}
            />
            <div class="button plus">
              <button
                type="button"
                class="btn btn-primary btn-number"
                data-type="plus"
                data-field="quant[1]"
                onClick={() => handleAddItem(item)}
              >
                <i class="ti-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td class="total-amount" data-title="Total">
          <span>${(item.quantity * item.price).toFixed(2)}</span>
        </td>
        <td class="action" data-title="Remove">
          <a href="#">
            <i
              class="ti-trash remove-icon"
              onClick={() => {
                handleDelete(item);
              }}
            ></i>
          </a>
        </td>
      </tr>
    </>
  );
};
const CartPage = () => {
  const cartState = useSelector((state) => state.cart);
  console.log("cartstare", cartState);

  const itemSum = cartState.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
 
  return (
    <div>
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="bread-inner">
                <ul class="bread-list">
                  <li>
                    <a href="index1.html">
                      Home<i class="ti-arrow-right"></i>
                    </a>
                  </li>
                  <li class="active">
                    <a href="blog-single.html">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shopping-cart section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table shopping-summery">
                <thead>
                  <tr class="main-hading">
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th class="text-center">UNIT PRICE</th>
                    <th class="text-center">QUANTITY</th>
                    <th class="text-center">TOTAL</th>
                    <th class="text-center">
                      <i class="ti-trash remove-icon"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartState.map((item, key) => {
                    return <CartItem item={item} key={key} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="total-amount">
                <div class="row">
                  <div class="col-lg-8 col-md-5 col-12">
                    <div class="left">
                      <div class="coupon">
                        <form action="#" target="_blank">
                          <input
                            name="Coupon"
                            placeholder="Enter Your Coupon"
                          />
                          <button class="btn">Apply</button>
                        </form>
                      </div>
                      <div class="checkbox">
                        <label class="checkbox-inline" for="2">
                          <input name="news" id="2" type="checkbox" /> Shipping
                          (+10$)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-7 col-12">
                    <div class="right">
                      <ul>
                        <li>
                          Cart Subtotal<span>${itemSum}</span>
                        </li>

                        <li>
                          Shipping<span>Free</span>
                        </li>
                        <li>
                          You Save<span>$20.00</span>
                        </li>
                        <li class="last">
                          You Pay<span>$310.00</span>
                        </li>
                      </ul>
                      <div class="button5">
                        <a href="#" class="btn">
                          Checkout
                        </a>
                        <a href="#" class="btn">
                          Continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
