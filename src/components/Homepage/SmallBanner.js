import React from "react";

function createMarkup (data) {
  return { __html: data };
}

const bannerProp = [
  {
    smallTitle: "Man's Collectons",
    bigTitle: "Summer travel <br /> collection",
    linkText: "Discover Now",
  },
  {
    smallTitle: "Bag Collectons",
    bigTitle: "Awesome Bag <br /> 2020",
    linkText: "Shop Now",
  },
  {
    smallTitle: "Flash Sale",
    bigTitle: "Mid Season <br /> Up to <span>40%</span> Off",
    linkText: "Discover Now",
  }
];

const SmallBanner = () => {
  return (
    <section className="small-banner section">
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Single Banner  --> */}
          {bannerProp.map((item, key) => {
            return (
              <div key={key} className="col-lg-4 col-md-6 col-12">
                <div className="single-banner">
                  <img src="https://via.placeholder.com/600x370" alt="#" />
                  <div className="content">
                    <p>{item.smallTitle}</p>
                    <h3  dangerouslySetInnerHTML={{__html: item.bigTitle}}></h3>
                    <a href="#">{item.linkText}</a>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <!-- /End Single Banner  --> */}
        </div>
      </div>
    </section>
  );
};

export default SmallBanner;
