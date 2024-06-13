import React from 'react';


const Homesearch = () => {
  return (
    <section className="p-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-12 col-md-12 col-12">
            <div className="Goodup-search-shadow">
              <ul className="nav nav-tabs search-tab mb-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="placesseach-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#placesseach"
                    type="button"
                    role="tab"
                    aria-controls="placesseach"
                    aria-selected="true"
                  >
                    Places
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="carseach-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#carseach"
                    type="button"
                    role="tab"
                    aria-controls="carseach"
                    aria-selected="false"
                  >
                    Car
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="realseach-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#realseach"
                    type="button"
                    role="tab"
                    aria-controls="realseach"
                    aria-selected="false"
                  >
                    Real Estate
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="eventseach-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#eventseach"
                    type="button"
                    role="tab"
                    aria-controls="eventseach"
                    aria-selected="false"
                  >
                    Events
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="placesseach" role="tabpanel" aria-labelledby="placesseach-tab">
                  <form className="main-search-wrap fl-wrap">
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-keyboard"></i></span>
                      <input type="text" className="form-control radius" placeholder="What are you looking for?" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-map-marker"></i></span>
                      <input type="text" className="form-control" placeholder="San Francisco, CA" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-briefcase"></i></span>
                      <select className="form-control">
                        <option value="">Choose Category</option>
                        <option value="1">Restaurants</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Hotel Booking</option>
                        <option value="4">Cafe & Night Bars</option>
                        <option value="5">Healthcare/Pharma</option>
                        <option value="6">Wedding & Marriage</option>
                        <option value="7">Finance/Insurance</option>
                      </select>
                    </div>
                    <div className="main-search-button">
                      <button className="btn full-width theme-bg text-white" type="button">Search</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="carseach" role="tabpanel" aria-labelledby="carseach-tab">
                  <form className="main-search-wrap fl-wrap">
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-keyboard"></i></span>
                      <input type="text" className="form-control radius" placeholder="car type, car name" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-map-marker"></i></span>
                      <input type="text" className="form-control" placeholder="Price" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-briefcase"></i></span>
                      <select className="form-control">
                        <option value="">Choose Car Brand</option>
                        <option value="1">Tata Nexon</option>
                        <option value="2">BMW Brand</option>
                        <option value="3">Maruti Suzuki</option>
                        <option value="4">Hundai Company</option>
                        <option value="5">Kia Company</option>
                        <option value="6">Mahindra Company</option>
                      </select>
                    </div>
                    <div className="main-search-button">
                      <button className="btn full-width theme-bg text-white" type="button">Search</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="realseach" role="tabpanel" aria-labelledby="realseach-tab">
                  <form className="main-search-wrap fl-wrap">
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-keyboard"></i></span>
                      <input type="text" className="form-control radius" placeholder="Job Title, Keyword or Company" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-map-marker"></i></span>
                      <input type="text" className="form-control" placeholder="Location or Zip Code" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-briefcase"></i></span>
                      <select className="form-control">
                        <option value="">Property Type</option>
                        <option value="1">Homes & Villa</option>
                        <option value="2">Apartment</option>
                        <option value="3">Condos</option>
                        <option value="4">Space & Office</option>
                        <option value="5">Town Hall</option>
                        <option value="6">Buildings</option>
                      </select>
                    </div>
                    <div className="main-search-button">
                      <button className="btn full-width theme-bg text-white" type="button">Search</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="eventseach" role="tabpanel" aria-labelledby="eventseach-tab">
                  <form className="main-search-wrap fl-wrap">
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-keyboard"></i></span>
                      <input type="text" className="form-control radius" placeholder="Job Title, Keyword or Company" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-map-marker"></i></span>
                      <input type="text" className="form-control" placeholder="Location or Zip Code" />
                    </div>
                    <div className="main-search-item">
                      <span className="search-tag"><i className="lni lni-briefcase"></i></span>
                      <select className="form-control">
                        <option value="">Choose Categories</option>
                        <option value="1">Festaurants</option>
                        <option value="2">Information Technology</option>
                        <option value="3">Cloud Computing</option>
                        <option value="4">Engineering Services</option>
                        <option value="5">Healthcare/Pharma</option>
                        <option value="6">Telecom/ Internet</option>
                        <option value="7">Finance/Insurance</option>
                      </select>
                    </div>
                    <div className="main-search-button">
                      <button className="btn full-width theme-bg text-white" type="button">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesearch;
