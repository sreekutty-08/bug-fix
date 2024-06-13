import React from 'react';


const Homebanner = () => {
  return (
    <div className="home-banner margin-bottom-0" style={{ background: '#f41b3b url(assets/img/banner-6.jpg) no-repeat' }} data-overlay="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="banner_caption text-center mb-5">
              <h1 className="banner_title ft-bold mb-1">Find Great Place in Your Areas</h1>
              <p className="fs-md ft-medium">Explore wonderful place to stay, salon, shopping, massage or visit local areas.</p>
            </div>
            <div className="Goodup-top-cates">
              <ul>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Hospital</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-shopping-basket"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Shoppings</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-basketball-ball"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Active Life</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Restaurants</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-car-alt"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Automotive</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="half-map-search-2.html" className="Goodup-top-cat-box">
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-pencil-ruler"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Art & Design</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
