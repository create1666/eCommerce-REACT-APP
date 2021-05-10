import { useEffect } from "react";
import SmallBanner from "./SmallBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/ProductAction";
import { addItemToCart } from "../../redux/actions/CartActions";

const Item = ({ item, handleAddToCart }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
      <div className="single-product">
        <div className="product-img">
          <a href="product-details.html">
            <img className="default-img" src={item.image} alt="#" />
            <img className="hover-img" src={item.image} alt="#" />
            <span className="out-of-stock">Hot</span>
          </a>
          <div className="button-head">
            <div className="product-action">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <i className=" ti-eye"></i>
                <span>Quick Shop</span>
              </a>
              <a title="Wishlist" href="#">
                <i className=" ti-heart "></i>
                <span>Add to Wishlist</span>
              </a>
              <a title="Compare" href="#">
                <i className="ti-bar-chart-alt"></i>
                <span>Add to Compare</span>
              </a>
            </div>
            <div className="product-action-2">
              <button onClick={() => handleAddToCart(item)} title="Add to cart">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h3>
            <a href="product-details.html">{item.title}</a>
          </h3>
          <div className="product-price">
            <span className="old">${item.price}</span>
            <span>${item.price - 0.05 * item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const products = useSelector((state) => state.products);
  const { loading, data: productData, error } = products;

  const addToCart = (item) => {
    dispatch(addItemToCart(item))
  }

  return (
    <>
      <section className="hero-slider">
        {/* <!-- Single Slider --> */}
        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1>
                          <span>UP TO 50% OFF </span>Shirt For Man
                        </h1>
                        <p>
                          Maboriosam in a nesciung eget magnae <br /> dapibus
                          disting tloctio in the find it pereri <br /> odiy
                          maboriosm.
                        </p>
                        <div className="button">
                          <a href="#" className="btn">
                            Shop Now!
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
        {/* <!--/ End Single Slider --> */}
      </section>
      {/* <!--/ End Slider Area --> */}

      <SmallBanner />

      {/* <!-- Start Product Area --> */}
      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">
                  {/* <!-- Tab Nav --> */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#man"
                        role="tab"
                      >
                        Man
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#women"
                        role="tab"
                      >
                        Woman
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#kids"
                        role="tab"
                      >
                        Kids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#accessories"
                        role="tab"
                      >
                        Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#essential"
                        role="tab"
                      >
                        Essential
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#prices"
                        role="tab"
                      >
                        Prices
                      </a>
                    </li>
                  </ul>
                  {/* <!--/ End Tab Nav --> */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* <!-- Start Single Tab --> */}
                  <div
                    className="tab-pane fade show active"
                    id="man"
                    role="tabpanel"
                  >
                    <div className="tab-single">
                      <div className="row">
                        {productData.map((item, key) => {
                          return (
                            <Item
                              handleAddToCart={addToCart}
                              item={item}
                              key={key}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                  {/* <!-- Start Single Tab --> */}
                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Hot Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Pink Show
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Pant Collectons
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Cap For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Polo Dress For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Black Sunglass For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                  {/* <!-- Start Single Tab --> */}
                  <div className="tab-pane fade" id="kids" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Hot Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Pink Show
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Pant Collectons
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Cap For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Polo Dress For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Black Sunglass For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                  {/* <!-- Start Single Tab --> */}
                  <div
                    className="tab-pane fade"
                    id="accessories"
                    role="tabpanel"
                  >
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Hot Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Pink Show
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Pant Collectons
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Cap For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Polo Dress For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Black Sunglass For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                  {/* <!-- Start Single Tab --> */}
                  <div className="tab-pane fade" id="essential" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Hot Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Pink Show
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Pant Collectons
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Cap For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Polo Dress For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Black Sunglass For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                  {/* <!-- Start Single Tab --> */}
                  <div className="tab-pane fade" id="prices" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Hot Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Pink Show
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Women Pant Collectons
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Bags Collection
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Awesome Cap For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Polo Dress For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img
                                  className="default-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <img
                                  className="hover-img"
                                  src="https://via.placeholder.com/550x750"
                                  alt="#"
                                />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    title="Quick View"
                                    href="#"
                                  >
                                    <i className=" ti-eye"></i>
                                    <span>Quick Shop</span>
                                  </a>
                                  <a title="Wishlist" href="#">
                                    <i className=" ti-heart "></i>
                                    <span>Add to Wishlist</span>
                                  </a>
                                  <a title="Compare" href="#">
                                    <i className="ti-bar-chart-alt"></i>
                                    <span>Add to Compare</span>
                                  </a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3>
                                <a href="product-details.html">
                                  Black Sunglass For Women
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ End Single Tab --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Product Area --> */}

      {/* <!-- Start Midium Banner  --> */}
      <section className="midium-banner">
        <div className="container">
          <div className="row">
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>
                    Man's items <br />
                    Up to<span> 50%</span>
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
            {/* <!-- Single Banner  --> */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>shoes women</p>
                  <h3>
                    mid season <br /> up to <span>70%</span>
                  </h3>
                  <a href="#" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- /End Single Banner  --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Midium Banner --> */}

      {/* <!-- Start Most Popular --> */}
      <div className="product-area most-popular section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Hot Item</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel popular-slider">
                {/* <!-- Start Single Product --> */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <span className="out-of-stock">Hot</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          title="Quick View"
                          href="#"
                        >
                          <i className=" ti-eye"></i>
                          <span>Quick Shop</span>
                        </a>
                        <a title="Wishlist" href="#">
                          <i className=" ti-heart "></i>
                          <span>Add to Wishlist</span>
                        </a>
                        <a title="Compare" href="#">
                          <i className="ti-bar-chart-alt"></i>
                          <span>Add to Compare</span>
                        </a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">
                        Black Sunglass For Women
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="old">$60.00</span>
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Product --> */}
                {/* <!-- Start Single Product --> */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          title="Quick View"
                          href="#"
                        >
                          <i className=" ti-eye"></i>
                          <span>Quick Shop</span>
                        </a>
                        <a title="Wishlist" href="#">
                          <i className=" ti-heart "></i>
                          <span>Add to Wishlist</span>
                        </a>
                        <a title="Compare" href="#">
                          <i className="ti-bar-chart-alt"></i>
                          <span>Add to Compare</span>
                        </a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Women Hot Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Product --> */}
                {/* <!-- Start Single Product --> */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <span className="new">New</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          title="Quick View"
                          href="#"
                        >
                          <i className=" ti-eye"></i>
                          <span>Quick Shop</span>
                        </a>
                        <a title="Wishlist" href="#">
                          <i className=" ti-heart "></i>
                          <span>Add to Wishlist</span>
                        </a>
                        <a title="Compare" href="#">
                          <i className="ti-bar-chart-alt"></i>
                          <span>Add to Compare</span>
                        </a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Pink Show</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Product --> */}
                {/* <!-- Start Single Product --> */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img
                        className="default-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                      <img
                        className="hover-img"
                        src="https://via.placeholder.com/550x750"
                        alt="#"
                      />
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          title="Quick View"
                          href="#"
                        >
                          <i className=" ti-eye"></i>
                          <span>Quick Shop</span>
                        </a>
                        <a title="Wishlist" href="#">
                          <i className=" ti-heart "></i>
                          <span>Add to Wishlist</span>
                        </a>
                        <a title="Compare" href="#">
                          <i className="ti-bar-chart-alt"></i>
                          <span>Add to Compare</span>
                        </a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>
                      <a href="product-details.html">Awesome Bags Collection</a>
                    </h3>
                    <div className="product-price">
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Single Product --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Most Popular Area --> */}

      {/* <!-- Start Shop Home List  --> */}
      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
              {/* <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  -->
            <!-- Start Single List  --> */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy">
                        <i className="fa fa-shopping-bag"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title">
                        <a href="#">Licity jelly leg flat Sandals</a>
                      </h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single List  --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop Home List  --> */}

      {/* <!-- Start Shop Blog  --> */}
      <section className="shop-blog section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Blog  --> */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July , 2020. Monday</p>
                  <a href="#" className="title">
                    Sed adipiscing ornare.
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* <!-- End Single Blog  --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Blog  --> */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">
                    Man’s Fashion Winter Sale
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* <!-- End Single Blog  --> */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* <!-- Start Single Blog  --> */}
              <div className="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div className="content">
                  <p className="date">22 July, 2020. Monday</p>
                  <a href="#" className="title">
                    Women Fashion Festive
                  </a>
                  <a href="#" className="more-btn">
                    Continue Reading
                  </a>
                </div>
              </div>
              {/* <!-- End Single Blog  --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop Blog  --> */}

      {/* <!-- Start Shop Services Area --> */}
      <section className="shop-services section home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-rocket"></i>
                <h4>Free shiping</h4>
                <p>Orders over $100</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-reload"></i>
                <h4>Free Return</h4>
                <p>Within 30 days returns</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-lock"></i>
                <h4>Sucure Payment</h4>
                <p>100% secure payment</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Start Single Service --> */}
              <div className="single-service">
                <i className="ti-tag"></i>
                <h4>Best Peice</h4>
                <p>Guaranteed price</p>
              </div>
              {/* <!-- End Single Service --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop Services Area --> */}
    </>
  );
};

export default Homepage;
