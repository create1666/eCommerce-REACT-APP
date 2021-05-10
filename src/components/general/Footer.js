import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <!-- Footer Top --> */}
      <div className="footer-top section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer about">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo2.png" alt="#" />
                  </a>
                </div>
                <p className="text">
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                  tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                </p>
                <p className="call">
                  Got Question? Call us 24/7
                  <span>
                    <a href="tel:123456789">+0123 456 789</a>
                  </span>
                </p>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer links">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              {/* <!-- Single Widget --> */}
              <div className="single-footer links">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
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
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-flickr"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Single Widget --> */}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="left">
                  <p>
                    Copyright © 2020{" "}
                    <a href="http://www.wpthemesgrid.com" target="_blank">
                      Wpthemesgrid
                    </a>{" "}
                    - All Rights Reserved.
                  </p>
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
  );
};

export default Footer;
