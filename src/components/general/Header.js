import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart as removeFromCartAction } from "../../redux/actions/CartActions";
import Notification from "cogo-toast";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation()

  console.log(location, 'location')
  const { pathname } = location
  const isLandingPage = pathname === '/'

  const cartCount = cart.length;

  const removeFromCart = (item) => {
    dispatch(removeFromCartAction(item));
    Notification.success("Item has been removed from cart");
  };
  return (
    <header className="header shop">
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              {/* <!-- Top Left --> */}
              <div className="top-left">
                <ul className="list-main">
                  <li>
                    <i className="ti-headphone-alt"></i> +060 (800) 801-582
                  </li>
                  <li>
                    <i className="ti-email"></i> support@shophub.com
                  </li>
                </ul>
              </div>
              {/* <!--/ End Top Left --> */}
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              {/* <!-- Top Right --> */}
              <div className="right-content">
                <ul className="list-main">
                  <li>
                    <i className="ti-location-pin"></i> Store location
                  </li>
                  <li>
                    <i className="ti-alarm-clock"></i>{" "}
                    <a href="#">Daily deal</a>
                  </li>
                  <li>
                    <i className="ti-user"></i> <a href="#">My account</a>
                  </li>
                  <li>
                    <i className="ti-power-off"></i>
                    <a href="login.html#">Login</a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Top Right --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">
              {/* <!-- Logo --> */}
              <div className="logo">
                <Link to='/'>
                  <img src="images/logo.png" alt="logo" />
                </Link>
              </div>
              {/* <!--/ End Logo -->
                <!-- Search Form --> */}
              <div className="search-top">
                <div className="top-search">
                  <a href="#0">
                    <i className="ti-search"></i>
                  </a>
                </div>
                {/* <!-- Search Form --> */}
                <div className="search-top">
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Search here..."
                      name="search"
                    />
                    <button value="search" type="submit">
                      <i className="ti-search"></i>
                    </button>
                  </form>
                </div>
                {/* <!--/ End Search Form --> */}
              </div>
              {/* <!--/ End Search Form --> */}
              <div className="mobile-nav"></div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <select>
                    <option>All Category</option>
                    <option>watch</option>
                    <option>mobile</option>
                    <option>kid’s item</option>
                  </select>
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                    />
                    <button className="btnn">
                      <i className="ti-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* <!-- Search Form --> */}
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="sinlge-bar shopping">
                  <a href="#" className="single-icon">
                    <i className="ti-bag"></i>{" "}
                    <span className="total-count">{cartCount}</span>
                  </a>
                  {/* <!-- Shopping Item --> */}
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>{cartCount} Items</span>
                      <Link to="/cart">View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      {cart.map((item, key) => {
                        return (
                          <li>
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i
                                className="fa fa-remove"
                                onClick={() => removeFromCart(item)}
                              ></i>
                            </a>
                            <a className="cart-img" href="#">
                              <img src={item.image} alt="#" />
                            </a>
                            <h4>
                              <a href="#">{item.title}</a>
                            </h4>
                            <p className="quantity">
                              {item.quantity}x -{" "}
                              <span className="amount">{`$ ${item.price}`}</span>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">
                          {cart.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                          }, 0)}
                        </span>
                      </div>
                      <a href="checkout.html" className="btn animate">
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/* <!--/ End Shopping Item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Inner --> */}
      <div className="header-inner">
        <div className="container">
          <div className="cat-nav-head">
            <div className="row">
              {isLandingPage && (
                <div className="col-lg-3">
                  <div className="all-category">
                    <h3 className="cat-heading">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                      CATEGORIES
                    </h3>
                    <ul className="main-category">
                      <li>
                        <a href="#">
                          New Arrivals{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="sub-category">
                          <li>
                            <a href="#">accessories</a>
                          </li>
                          <li>
                            <a href="#">best selling</a>
                          </li>
                          <li>
                            <a href="#">top 100 offer</a>
                          </li>
                          <li>
                            <a href="#">sunglass</a>
                          </li>
                          <li>
                            <a href="#">watch</a>
                          </li>
                          <li>
                            <a href="#">man’s product</a>
                          </li>
                          <li>
                            <a href="#">ladies</a>
                          </li>
                          <li>
                            <a href="#">westrn dress</a>
                          </li>
                          <li>
                            <a href="#">denim </a>
                          </li>
                        </ul>
                      </li>
                      <li className="main-mega">
                        <a href="#">
                          best selling{" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="mega-menu">
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Kid's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Kids Toys</a>
                              <a href="#">Kids Travel Car</a>
                              <a href="#">Kids Color Shape</a>
                              <a href="#">Kids Tent</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Men's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Watch</a>
                              <a href="#">T-shirt</a>
                              <a href="#">Hoodies</a>
                              <a href="#">Formal Pant</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">
                              Shop Women's
                            </a>
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/225x155"
                                alt="#"
                              />
                            </div>
                            <div className="inner-link">
                              <a href="#">Ladies Shirt</a>
                              <a href="#">Ladies Frog</a>
                              <a href="#">Ladies Sun Glass</a>
                              <a href="#">Ladies Watch</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">accessories</a>
                      </li>
                      <li>
                        <a href="#">top 100 offer</a>
                      </li>
                      <li>
                        <a href="#">sunglass</a>
                      </li>
                      <li>
                        <a href="#">watch</a>
                      </li>
                      <li>
                        <a href="#">man’s product</a>
                      </li>
                      <li>
                        <a href="#">ladies</a>
                      </li>
                      <li>
                        <a href="#">westrn dress</a>
                      </li>
                      <li>
                        <a href="#">denim </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* <!-- Main Menu --> */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active">
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Product</a>
                          </li>
                          <li>
                            <a href="#">Service</a>
                          </li>
                          <li>
                            <a href="#">
                              Shop<i className="ti-angle-down"></i>
                              <span className="new">New</span>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Pages</a>
                          </li>
                          <li>
                            <a href="#">
                              Blog<i className="ti-angle-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="blog-single-sidebar.html">
                                  Blog Single Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/* <!--/ End Main Menu -->	 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Header Inner --> */}
    </header>
  );
};

export default Header;
