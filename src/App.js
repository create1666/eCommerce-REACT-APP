const App = () => {
  return (
    <>
    <header className="header shop">
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              {/* <!-- Top Left --> */}
              <div className="top-left">
                <ul className="list-main">
                  <li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
                  <li><i className="ti-email"></i> support@shophub.com</li>
                </ul>
              </div>
              {/* <!--/ End Top Left --> */}
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              {/* <!-- Top Right --> */}
              <div className="right-content">
                <ul className="list-main">
                  <li><i className="ti-location-pin"></i> Store location</li>
                  <li><i className="ti-alarm-clock"></i> <a href="#">Daily deal</a></li>
                  <li><i className="ti-user"></i> <a href="#">My account</a></li>
                  <li><i className="ti-power-off"></i><a href="login.html#">Login</a></li>
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
                <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
              </div>
              {/* <!--/ End Logo -->
              <!-- Search Form --> */}
              <div className="search-top">
                <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
                {/* <!-- Search Form --> */}
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit"><i className="ti-search"></i></button>
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
                    <input name="search" placeholder="Search Products Here....." type="search" />
                    <button className="btnn"><i className="ti-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* <!-- Search Form --> */}
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                </div>
                <div className="sinlge-bar">
                  <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                </div>
                <div className="sinlge-bar shopping">
                  <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
                  {/* <!-- Shopping Item --> */}
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="#">View Cart</a>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                        <h4><a href="#">Woman Ring</a></h4>
                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                      </li>
                      <li>
                        <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                        <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
                        <h4><a href="#">Woman Necklace</a></h4>
                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
                      <a href="checkout.html" className="btn animate">Checkout</a>
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
              <div className="col-lg-3">
                <div className="all-category">
                  <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                  <ul className="main-category">
                    <li><a href="#">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                      <ul className="sub-category">
                        <li><a href="#">accessories</a></li>
                        <li><a href="#">best selling</a></li>
                        <li><a href="#">top 100 offer</a></li>
                        <li><a href="#">sunglass</a></li>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">man’s product</a></li>
                        <li><a href="#">ladies</a></li>
                        <li><a href="#">westrn dress</a></li>
                        <li><a href="#">denim </a></li>
                      </ul>
                    </li>
                    <li className="main-mega"><a href="#">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                      <ul className="mega-menu">
                        <li className="single-menu">
                          <a href="#" className="title-link">Shop Kid's</a>
                          <div className="image">
                            <img src="https://via.placeholder.com/225x155" alt="#" />
                          </div>
                          <div className="inner-link">
                            <a href="#">Kids Toys</a>
                            <a href="#">Kids Travel Car</a>
                            <a href="#">Kids Color Shape</a>
                            <a href="#">Kids Tent</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">Shop Men's</a>
                          <div className="image">
                            <img src="https://via.placeholder.com/225x155" alt="#" />
                          </div>
                          <div className="inner-link">
                            <a href="#">Watch</a>
                            <a href="#">T-shirt</a>
                            <a href="#">Hoodies</a>
                            <a href="#">Formal Pant</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">Shop Women's</a>
                          <div className="image">
                            <img src="https://via.placeholder.com/225x155" alt="#" />
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
                    <li><a href="#">accessories</a></li>
                    <li><a href="#">top 100 offer</a></li>
                    <li><a href="#">sunglass</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">man’s product</a></li>
                    <li><a href="#">ladies</a></li>
                    <li><a href="#">westrn dress</a></li>
                    <li><a href="#">denim </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-12">
                <div className="menu-area">
                  {/* <!-- Main Menu --> */}
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">	
                      <div className="nav-inner">	
                        <ul className="nav main-menu menu navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>												
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
                              <ul className="dropdown">
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Pages</a></li>									
                            <li><a href="#">Blog<i className="ti-angle-down"></i></a>
                              <ul className="dropdown">
                                <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
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
    {/* // <!--/ End Header -->
    
    // <!-- Slider Area --> */}
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
                      <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                      <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                      <div className="button">
                        <a href="#" className="btn">Shop Now!</a>
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
    
    {/* <!-- Start Small Banner  --> */}
    <section className="small-banner section">
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Single Banner  --> */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img src="https://via.placeholder.com/600x370" alt="#" />
              <div className="content">
                <p>Man's Collectons</p>
                <h3>Summer travel <br /> collection</h3>
                <a href="#">Discover Now</a>
              </div>
            </div>
          </div>
          {/* <!-- /End Single Banner  --> */}
          {/* <!-- Single Banner  --> */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-banner">
              <img src="https://via.placeholder.com/600x370" alt="#" />
              <div className="content">
                <p>Bag Collectons</p>
                <h3>Awesome Bag <br /> 2020</h3>
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
          {/* <!-- /End Single Banner  --> */}
          {/* <!-- Single Banner  --> */}
          <div className="col-lg-4 col-12">
            <div className="single-banner tab-height">
              <img src="https://via.placeholder.com/600x370" alt="#" />
              <div className="content">
                <p>Flash Sale</p>
                <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                <a href="#">Discover Now</a>
              </div>
            </div>
          </div>
          {/* <!-- /End Single Banner  --> */}
        </div>
      </div>
    </section>
    {/* <!-- End Small Banner --> */}
    
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
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                  </ul>
                  {/* <!--/ End Tab Nav --> */}
                </div>
                <div className="tab-content" id="myTabContent">
                  {/* <!-- Start Single Tab --> */}
                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                  <div className="tab-pane fade" id="accessories" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="product-details.html">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Women Pant Collectons</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Awesome Cap For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Polo Dress For Women</a></h3>
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
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                <h3>Man's items <br />Up to<span> 50%</span></h3>
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
                <h3>mid season <br /> up to <span>70%</span></h3>
                <a href="#" className="btn">Shop Now</a>
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
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="out-of-stock">Hot</span>
                  </a>
                  <div className="button-head">
                    <div className="product-action">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                      <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                      <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                      <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="product-content">
                  <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
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
                                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  </a>
                  <div className="button-head">
                    <div className="product-action">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                      <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                      <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                      <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                  </div>
                              </div>
                              <div className="product-content">
                                  <h3><a href="product-details.html">Women Hot Collection</a></h3>
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
                                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className="new">New</span>
                                  </a>
                  <div className="button-head">
                    <div className="product-action">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                      <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                      <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                      <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                  </div>
                              </div>
                              <div className="product-content">
                                  <h3><a href="product-details.html">Awesome Pink Show</a></h3>
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
                                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  </a>
                  <div className="button-head">
                    <div className="product-action">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                      <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                      <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                    </div>
                    <div className="product-action-2">
                      <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                  </div>
                              </div>
                              <div className="product-content">
                                  <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h4 className="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                    <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 no-padding">
                  <div className="content">
                    <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
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
                <a href="#" className="title">Sed adipiscing ornare.</a>
                <a href="#" className="more-btn">Continue Reading</a>
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
                <a href="#" className="title">Man’s Fashion Winter Sale</a>
                <a href="#" className="more-btn">Continue Reading</a>
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
                <a href="#" className="title">Women Fashion Festive</a>
                <a href="#" className="more-btn">Continue Reading</a>
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
    
    {/* <!-- Start Shop Newsletter  --> */}
    <section className="shop-newsletter section">
      <div className="container">
        <div className="inner-top">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              {/* <!-- Start Newsletter Inner --> */}
              <div className="inner">
                <h4>Newsletter</h4>
                <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                  <input name="EMAIL" placeholder="Your email address" required="" type="email"/>
                  <button className="btn">Subscribe</button>
                </form>
              </div>
              {/* <!-- End Newsletter Inner --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Shop Newsletter --> */}
    
    {/* <!-- Start Footer Area --> */}
    <footer className="footer">
      {/* <!-- Footer Top --> */}
      <div className="footer-top section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer about">
                <div className="logo">
                  <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
                </div>
                <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span></p>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer links">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer links">
                <h4>Customer Service</h4>
                <ul>
                  <li><a href="#">Payment Methods</a></li>
                  <li><a href="#">Money-back</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer social">
                <h4>Get In Tuch</h4>
                {/* <!-- Single Widget --> */}
                <div className="contact">
                  <ul>
                    <li>NO. 342 - London Oxford Street.</li>
                    <li>012 United Kingdom.</li>
                    <li>info@eshop.com</li>
                    <li>+032 3456 7890</li>
                  </ul>
                </div>
                <ul>
                  <li><a href="#"><i className="ti-facebook"></i></a></li>
                  <li><a href="#"><i className="ti-twitter"></i></a></li>
                  <li><a href="#"><i className="ti-flickr"></i></a></li>
                  <li><a href="#"><i className="ti-instagram"></i></a></li>
                </ul>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer Top --> */}
      <div className="copyright">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="left">
                  <p>Copyright © 2020 <a href="http://www.wpthemesgrid.com" target="_blank">Wpthemesgrid</a>  -  All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="right">
                  <img src="images/payments.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App;
