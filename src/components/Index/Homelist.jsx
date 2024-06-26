import React from "react";


const Homelist = () => {
  return (
    <>
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <section className="sec_title position-relative">
                <h6 className="theme-cl">Featured Listings</h6>
                <h2 className="ft-bold">Goodup in Los Angeles</h2>
              </section>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <ul className="nav nav-tabs small-tab mb-3">
                  <li className="nav-item">
                    <button className="nav-link active">Places</button>
                  </li>
                  {/* Add buttons for other categories (events, doctors, etc.) here */}
                </ul>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="tab-content" id="myTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="places"
                    role="tabpanel"
                    aria-labelledby="places-tab"
                  >
                    <div className="row justify-content-center">
                      {/* Place listings go here */}
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="Goodup-grid-wrap">
                          <div className="Goodup-grid-upper">
                            {/* Status goes here (currently commented out) */}
                            <a href="#" className="Goodup-grid-thumb">
                              <img src="..." alt="Place thumbnail" />
                            </a>
                            <div className="Goodup-rating overlay">
                              {/* Rating stars and reviews go here */}
                            </div>
                          </div>
                          <div className="Goodup-grid-fl-wrap">
                            <div className="Goodup-author">
                              {/* Author info (avatar, name) goes here */}
                            </div>
                            <h4 className="list-title ft-medium medium">
                              Place Title
                            </h4>
                            <div className="Goodup-location">
                              {/* Place location with map marker icon goes here */}
                            </div>
                            <p className="Goodup-middle-caption">
                              Short description of the place
                            </p>
                          </div>
                          <div className="Goodup-grid-footer">
                            <div className="Goodup-ft-first">
                              {/* Contact buttons (phone, message) go here */}
                              {/* Share button goes here */}
                            </div>
                            <div className="Goodup-ft-last">
                              <button>View More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add more place listings with the same structure */}
                    </div>
                  </div>
                  {/* Add tab content for other categories here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="Goodup-grid-wrap">
            <div class="Goodup-grid-upper">
              <div class="Goodup-pos ab-left">
                <div class="Goodup-status close me-2">Closed</div>
                <div class="Goodup-featured-tag">Featured</div>
              </div>
              <div class="Goodup-grid-thumb">
                <a
                  href="single-listing-detail-2.html"
                  class="d-block text-center m-auto"
                >
                  <img
                    src="assets/img/listing/l-8.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="Goodup-rating overlay">
                <div class="Goodup-pr-average poor">2.3</div>
                <div class="Goodup-aldeio">
                  <div class="Goodup-rates">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="Goodup-all-review">
                    <span>42 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="Goodup-grid-fl-wrap">
              <div class="Goodup-caption px-3 py-2">
                <div class="Goodup-author">
                  <a href="author-detail.html">
                    <img
                      src="assets/img/t-4.png"
                      class="img-fluid circle"
                      alt=""
                    />
                  </a>
                </div>
                <h4 class="mb-0 list-title ft-medium medium">
                  <a
                    href="single-listing-detail-2.html"
                    class="text-dark fs-md"
                  >
                    The Great Allante Shop
                  </a>
                </h4>
                <div class="Goodup-location">
                  <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Oliy
                  Denver, USA
                </div>
                <div class="Goodup-middle-caption mt-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                </div>
              </div>
              <div class="Goodup-grid-footer py-2 px-3">
                <div class="Goodup-ft-first">
                  <div class="Goodup-inline">
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni lni-phone"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni-envelope position-absolute"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#share"
                        class="ft-bold"
                      >
                        <i class="lni lni-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="Goodup-ft-last">
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="Goodup-grid-wrap">
            <div class="Goodup-grid-upper">
              <div class="Goodup-pos ab-left">
                <div class="Goodup-status open me-2">Open</div>
              </div>
              <div class="Goodup-grid-thumb">
                <a
                  href="single-listing-detail-2.html"
                  class="d-block text-center m-auto"
                >
                  <img
                    src="assets/img/listing/l-9.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="Goodup-rating overlay">
                <div class="Goodup-pr-average high">4.2</div>
                <div class="Goodup-aldeio">
                  <div class="Goodup-rates">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="Goodup-all-review">
                    <span>12 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="Goodup-grid-fl-wrap">
              <div class="Goodup-caption px-3 py-2">
                <div class="Goodup-author">
                  <a href="author-detail.html">
                    <img
                      src="assets/img/t-5.png"
                      class="img-fluid circle"
                      alt=""
                    />
                  </a>
                </div>
                <h4 class="mb-0 ft-medium medium">
                  <a
                    href="single-listing-detail-2.html"
                    class="text-dark fs-md"
                  >
                    Unisex Blue Spa Massage
                  </a>
                </h4>
                <div class="Goodup-location">
                  <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Warmingham,
                  London
                </div>
                <div class="Goodup-middle-caption mt-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                </div>
              </div>
              <div class="Goodup-grid-footer py-2 px-3">
                <div class="Goodup-ft-first">
                  <div class="Goodup-inline">
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni lni-phone"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni-envelope position-absolute"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#share"
                        class="ft-bold"
                      >
                        <i class="lni lni-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="Goodup-ft-last">
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="Goodup-grid-wrap">
            <div class="Goodup-grid-upper">
              <div class="Goodup-pos ab-left">
                <div class="Goodup-status close me-2">Closed</div>
                <div class="Goodup-featured-tag">Featured</div>
              </div>
              <div class="Goodup-grid-thumb">
                <a
                  href="single-listing-detail-2.html"
                  class="d-block text-center m-auto"
                >
                  <img
                    src="assets/img/listing/l-10.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="Goodup-rating overlay">
                <div class="Goodup-pr-average poor">2.7</div>
                <div class="Goodup-aldeio">
                  <div class="Goodup-rates">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="Goodup-all-review">
                    <span>36 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="Goodup-grid-fl-wrap">
              <div class="Goodup-caption px-3 py-2">
                <div class="Goodup-author">
                  <a href="author-detail.html">
                    <img
                      src="assets/img/t-6.png"
                      class="img-fluid circle"
                      alt=""
                    />
                  </a>
                </div>
                <h4 class="mb-0 ft-medium medium">
                  <a
                    href="single-listing-detail-2.html"
                    class="text-dark fs-md"
                  >
                    Washington, Canada
                  </a>
                </h4>
                <div class="Goodup-location">
                  <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Liverpool,
                  London
                </div>
                <div class="Goodup-middle-caption mt-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                </div>
              </div>
              <div class="Goodup-grid-footer py-2 px-3">
                <div class="Goodup-ft-first">
                  <div class="Goodup-inline">
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni lni-phone"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni-envelope position-absolute"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#share"
                        class="ft-bold"
                      >
                        <i class="lni lni-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="Goodup-ft-last">
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="Goodup-grid-wrap">
            <div class="Goodup-grid-upper">
              <div class="Goodup-pos ab-left">
                <div class="Goodup-status close me-2">Closed</div>
              </div>
              <div class="Goodup-grid-thumb">
                <a
                  href="single-listing-detail-2.html"
                  class="d-block text-center m-auto"
                >
                  <img
                    src="assets/img/listing/l-11.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="Goodup-rating overlay">
                <div class="Goodup-pr-average high">4.3</div>
                <div class="Goodup-aldeio">
                  <div class="Goodup-rates">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="Goodup-all-review">
                    <span>22 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="Goodup-grid-fl-wrap">
              <div class="Goodup-caption px-3 py-2">
                <div class="Goodup-author">
                  <a href="author-detail.html">
                    <img
                      src="assets/img/t-7.png"
                      class="img-fluid circle"
                      alt=""
                    />
                  </a>
                </div>
                <h4 class="mb-0 ft-medium medium">
                  <a
                    href="single-listing-detail-2.html"
                    class="text-dark fs-md"
                  >
                    Ubber Shopping Services
                  </a>
                </h4>
                <div class="Goodup-location">
                  <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Metrio
                  General Store
                </div>
                <div class="Goodup-middle-caption mt-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos
                    ducimus...
                  </p>
                </div>
              </div>
              <div class="Goodup-grid-footer py-2 px-3">
                <div class="Goodup-ft-first">
                  <div class="Goodup-inline">
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni lni-phone"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni-envelope position-absolute"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#share"
                        class="ft-bold"
                      >
                        <i class="lni lni-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="Goodup-ft-last">
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div class="Goodup-grid-wrap">
            <div class="Goodup-grid-upper">
              <div class="Goodup-pos ab-left">
                <div class="Goodup-status open me-2">Open</div>
                <div class="Goodup-featured-tag">Featured</div>
              </div>
              <div class="Goodup-grid-thumb">
                <a
                  href="single-listing-detail-2.html"
                  class="d-block text-center m-auto"
                >
                  <img
                    src="assets/img/listing/l-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="Goodup-rating overlay">
                <div class="Goodup-pr-average mid">3.5</div>
                <div class="Goodup-aldeio">
                  <div class="Goodup-rates">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="Goodup-all-review">
                    <span>12 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="Goodup-grid-fl-wrap">
              <div class="Goodup-caption px-3 py-2">
                <div class="Goodup-author">
                  <a href="author-detail.html">
                    <img
                      src="assets/img/t-8.png"
                      class="img-fluid circle"
                      alt=""
                    />
                  </a>
                </div>
                <h4 class="mb-0 ft-medium medium">
                  <a
                    href="single-listing-detail-2.html"
                    class="text-dark fs-md"
                  >
                    Rajwara Marriage Home
                  </a>
                </h4>
                <div class="Goodup-location">
                  <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Old
                  California, USA
                </div>
                <div class="Goodup-middle-caption mt-3">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                </div>
              </div>
              <div class="Goodup-grid-footer py-2 px-3">
                <div class="Goodup-ft-first">
                  <div class="Goodup-inline">
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni lni-phone"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button type="button">
                        <i class="lni lni-envelope position-absolute"></i>
                      </button>
                    </div>
                    <div class="Goodup-bookmark-btn">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#share"
                        class="ft-bold"
                      >
                        <i class="lni lni-share"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="Goodup-ft-last">
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="events"
          role="tabpanel"
          aria-labelledby="events-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Amagansett Go Around
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>Meltron Silver,
                      UK
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Sport & Football</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">9 Fab 09:30 - 10:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Amateur Barber Night
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>California, USA
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Sport & Football</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">10 Fab 09:00 - 10:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Apex Muker Trys
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>Montreal,
                      Australia
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">It Services</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">12 Apr 14:30 - 15:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Ragni Book Launching
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>Old Denver, USA
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Education</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">18 Oct 10:00 - 11:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Madhu Spa Salon
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>104 Washington,
                      USA
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Spa & Salon</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">12 Sep 10:00 - 10:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-6.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Blue Light Cafe
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>California,
                      Canada
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Party & Cafe</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">17 Jul 12:00 - 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-7.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Allante Mall Opening
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>Liverpool,
                      London
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Shopping</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">10 June 10:00 - 11:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="event-detail.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/listing/l-8.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-overlay-caps">
                    <h4 class="mb-0 ft-medium medium">
                      <a href="event-detail.html" class="text-white fs-md">
                        Antisocial Darwinism
                      </a>
                    </h4>
                    <div class="Goodup-location text-white">
                      <i class="fas fa-map-marker-alt me-1"></i>San Francisco,
                      USA
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-grid-footer py-3 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-catsin">Social Network</div>
                    </div>
                    <div class="Goodup-ft-last">
                      <span class="small">15 May 10:00 - 11:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="doctor"
          role="tabpanel"
          aria-labelledby="doctor-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-1.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Heather D. Birch
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-2.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Joyce G. Howell
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-3.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Juliana J. GGoodupry
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-4.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Elizabeth J. Vergara
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-5.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Michelle R. McIntyre
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-6.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Mary F. Holliday
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-7.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Dennis K. Bales
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="doctor-grid-view">
                <div class="doctor-grid-thumb">
                  <a href="single-listing-detail-4.html">
                    <img src="assets/img/doc-8.jpg" class="img-fluid" alt="" />
                  </a>
                </div>

                <div class="doctor-grid-caption">
                  <div class="doc-title-wrap">
                    <h4 class="doc-title verified">
                      <a href="single-listing-detail-4.html">
                        Dr. Donald S. Herring
                      </a>
                    </h4>
                  </div>
                  <span class="doc-designation">
                    MBBS, MS - General Surgery, MCh
                  </span>

                  <div class="doc-inner-wrap">
                    <div class="doc-ratting-boxes">
                      <ul class="doc ratting-view">
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star filled"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                      <span class="doctor-review-list">(44 Reviews)</span>
                    </div>
                    <div class="doc-location">
                      <i class="fas fa-map-marker-alt me-1 theme-cl"></i>G87P,
                      Birmingham, UK
                    </div>
                  </div>
                </div>

                <div class="doctor-grid-footer">
                  <div class="doc-foot-first">
                    <span class="av-status available">Available Today</span>
                  </div>
                  <div class="doc-foot-last">
                    <a href="#" class="btn doc-book-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="car"
          role="tabpanel"
          aria-labelledby="car-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>30,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Hyundai
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Petrol</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2018</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>20 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>500 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>22,500</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Tata
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Diesel</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2017</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>22 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>512 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>40,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Maruti
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Petrol</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2013</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>26 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>700 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>32,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Hyundai
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Diesel</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2017</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>18 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>450 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>50,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Nexon
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Petrol</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2020</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>22 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>600 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-6.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>35,500</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Maruti
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Diesel</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2012</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>21 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>520 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-7.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>25,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Tata
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Diesel</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2016</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>24 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>450 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-7.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/car/c-8.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>34,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-cates multi">
                      <a href="search-car.html" class="cats-1">
                        Maruti
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-7.html"
                        class="text-dark fs-md"
                      >
                        New Hyundai Creta
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-gas-pump"></i>
                            <span>Petrol</span>
                          </li>
                          <li>
                            <i class="far fa-calendar-alt"></i>
                            <span>2019</span>
                          </li>
                          <li>
                            <i class="fas fa-blender-phone"></i>
                            <span>23 KM/L</span>
                          </li>
                          <li>
                            <i class="fab fa-accusoft"></i>
                            <span>540 CC</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="real"
          role="tabpanel"
          aria-labelledby="real-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status open me-2">For Rent</div>
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>30,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-1.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.8
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Apartment
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Liverpool London, LC345AC
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>San
                        Francisco, USA
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status me-2">For Sale</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>44,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-2.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.7
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Condos
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Montreal Canada, HAQC445
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>
                        Liverpool, London UK
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status open me-2">For Rent</div>
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>37,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-3.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.5
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Villa
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Huwai Denever USA, AWE789O
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>
                        California, Canada
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status me-2">For Sale</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>45,000K</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-4.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.9
                      </span>
                      <a href="search-property.html" class="cats-1">
                        House
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Alameda Canada, SHQT45O
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>104
                        Washington, USA
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status open me-2">For Rent</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>35,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-5.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.6
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Building
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Henever Canada, QWUI98
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>Old
                        Denver, USA
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status open me-2">For Rent</div>
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-6.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>42,000</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-6.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.2
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Apartment
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Barghimbar USA, ERIO098
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>
                        Montreal, Australia
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status me-2">For Sale</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-7.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>31,950</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-7.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.5
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Villa
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Burbank Canada, ECH15462
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>
                        California, USA
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status open me-2">For Rent</div>
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-5.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/real/r-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-prt-price">
                      $<span>46,999</span>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-author">
                      <a href="author-detail.html">
                        <img
                          src="assets/img/t-8.png"
                          class="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="Goodup-cates multi">
                      <span class="Goodup-apr-rates">
                        <i class="fas fa-star"></i>4.7
                      </span>
                      <a href="search-property.html" class="cats-1">
                        Work Space
                      </a>
                    </div>
                    <h4 class="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-5.html"
                        class="text-dark fs-md"
                      >
                        Emeryville Green Vally
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-middle-caption mt-2">
                      <div class="Goodup-options-list">
                        <ul class="no-list-style">
                          <li>
                            <i class="fas fa-bed"></i>
                            <span>3 Beds</span>
                          </li>
                          <li>
                            <i class="fas fa-bath"></i>
                            <span>2 Baths</span>
                          </li>
                          <li>
                            <i class="fas fa-clone"></i>
                            <span>1.2k sqft</span>
                          </li>
                          <li>
                            <i class="fas fa-calendar"></i>
                            <span>3 Days Ago</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="Goodup-grid-footer py-2 px-3">
                    <div class="Goodup-ft-first">
                      <div class="Goodup-location">
                        <i class="fas fa-map-marker-alt me-1 theme-cl"></i>
                        Meltron Silver, UK
                      </div>
                    </div>
                    <div class="Goodup-ft-last">
                      <div class="Goodup-inline">
                        <div class="Goodup-bookmark-btn">
                          <button type="button">
                            <i class="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="hotels"
          role="tabpanel"
          aria-labelledby="hotels-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status offer me-2">-20% Off</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status offer me-2">-20% Off</div>
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status offer me-2">-20% Off</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/6.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-featured-tag">Featured</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/7.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="Goodup-grid-wrap">
                <div class="Goodup-grid-upper">
                  <div class="Goodup-bookmark-btn">
                    <button type="button">
                      <i class="lni lni-heart-filled position-absolute"></i>
                    </button>
                  </div>
                  <div class="Goodup-pos ab-left">
                    <div class="Goodup-status offer me-2">-20% Off</div>
                  </div>
                  <div class="Goodup-grid-thumb">
                    <a
                      href="single-listing-detail-8.html"
                      class="d-block text-center m-auto"
                    >
                      <img
                        src="assets/img/rooms/8.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="Goodup-rating overlay">
                    <div class="Goodup-pr-average high">4.2</div>
                    <div class="Goodup-aldeio">
                      <div class="Goodup-rates">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="Goodup-all-review">
                        <span>42 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Goodup-grid-fl-wrap">
                  <div class="Goodup-caption px-3 py-2">
                    <div class="Goodup-room-price">
                      <span>$199</span>per night
                    </div>
                    <h4 class="mb-0 ft-medium medium mb-0">
                      <a
                        href="single-listing-detail-8.html"
                        class="text-dark fs-md"
                      >
                        3112 Comfort Deluxe Space
                        <span class="verified-badge">
                          <i class="fas fa-check-circle"></i>
                        </span>
                      </a>
                    </h4>
                    <div class="Goodup-distance">1.5 km to Town Center</div>
                    <div class="Goodup-middle-caption mt-3">
                      <div class="Goodup-facilities-wrap Goodup-flx mb-0">
                        <div class="Goodup-facility-list">
                          <ul class="no-list-style">
                            <li>
                              <i class="fas fa-wifi"></i>
                            </li>
                            <li>
                              <i class="fas fa-swimming-pool"></i>
                            </li>
                            <li>
                              <i class="fas fa-parking"></i>
                            </li>
                            <li>
                              <i class="fas fa-dog"></i>
                            </li>
                            <li>
                              <i class="fas fa-fan"></i>
                            </li>
                            <li>
                              <i class="fas fa-wine-glass-alt"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="Goodup-booking-button">
                        <a href="#" class="Goodup-btn-book">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="jobs"
          role="tabpanel"
          aria-labelledby="jobs-tab"
        >
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

                  <label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-1.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">
                        Application Designer
                      </a>
                    </h4>
                    <div class="_times_jb">$70k - 80k</div>
                    <div class="_jb_types fulltime_lite">Full Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">Just now</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}
                  <label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-2.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">IOS Developer</a>
                    </h4>
                    <div class="_times_jb">$55k - 80k</div>
                    <div class="_jb_types parttime_lite">Part Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">10 min ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

                  <label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-3.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">Web Developer</a>
                    </h4>
                    <div class="_times_jb">$50k - 60k</div>
                    <div class="_jb_types internship_lite">Internship</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">02 min ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

<label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>

                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-4.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">
                        Product Designer
                      </a>
                    </h4>
                    <div class="_times_jb">$40k - 60k</div>
                    <div class="_jb_types parttime_lite">Part Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">05 min ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

<label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-5.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">UI/UX Designer</a>
                    </h4>
                    <div class="_times_jb">$60k - 80k</div>
                    <div class="_jb_types remote">Remote</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">10 min ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

<label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-6.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">SEO Expert</a>
                    </h4>
                    <div class="_times_jb">$30k - 50k</div>
                    <div class="_jb_types fulltime_lite">Full Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">20 min ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}
                   <label class="toggler toggler-danger">
                   <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-7.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">
                        Magento Developer
                      </a>
                    </h4>
                    <div class="_times_jb">$50k - 60k</div>
                    <div class="_jb_types internship_lite">Internship</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">1 hour ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

<label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-8.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">
                        WordPress Developer
                      </a>
                    </h4>
                    <div class="_times_jb">$40k - 60k</div>
                    <div class="_jb_types fulltime_lite">Full Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">6 hour ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

                  <label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>

                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-9.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">PHP Developer</a>
                    </h4>
                    <div class="_times_jb">$25k - 40k</div>
                    <div class="_jb_types remote">Remote</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">3 hour ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger">
                    <input type="checkbox">
                      <i class="fa fa-bookmark"></i>
                    </input>
                  </label> */}

<label class="toggler toggler-danger">
                    <input type="checkbox"/>
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-10.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">Content Writer</a>
                    </h4>
                    <div class="_times_jb">$30k - 40k</div>
                    <div class="_jb_types fulltime_lite">Full Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">5 hour ago</div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div class="_jb_list72">
                <div class="jobs-like bookmark">
                  {/* <label class="toggler toggler-danger"><input type="checkbox"><i class="fa fa-bookmark"></i></input></label> */}
                  <label class="toggler toggler-danger">
                    <input type="checkbox" />
                  </label>
                </div>
                <div class="_jb_list72_flex">
                  <div class="_jb_list72_first">
                    <div class="_jb_list72_yhumb">
                      <img src="assets/img/c-11.png" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="_jb_list72_last">
                    <h4 class="_jb_title">
                      <a href="single-listing-detail-6.html">UI/UX Designer</a>
                    </h4>
                    <div class="_times_jb">$30k - 55k</div>
                    <div class="_jb_types parttime_lite">Part Time</div>
                  </div>
                </div>
                <div class="_jb_list72_foot">
                  <div class="_times_jb">7 hour ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="space min gray">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="sec_title position-relative text-center mb-5">
                <h6 class="mb-0 theme-cl">Popular Categories</h6>
                <h2 class="ft-bold">Browse Top Categories</h2>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">07 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-stethoscope"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Dentists</h4>
                    <span class="text-muted">607 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">17 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-building"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">
                      IT &amp; Banking
                    </h4>
                    <span class="text-muted">76 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">19 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-shopping-basket"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Shoppings</h4>
                    <span class="text-muted">112 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">32 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-screwdriver"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Home Services</h4>
                    <span class="text-muted">322 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">27 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-basketball-ball"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Active Life</h4>
                    <span class="text-muted">161 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">26 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Restaurants</h4>
                    <span class="text-muted">172 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">10 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Education</h4>
                    <span class="text-muted">144 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">24 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-house-damage"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Real Estate</h4>
                    <span class="text-muted">210 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">18 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-wine-glass"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">
                      Event Palnning
                    </h4>
                    <span class="text-muted">241 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">06 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-car-alt"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">Automotive</h4>
                    <span class="text-muted">52 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">08 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-pencil-ruler"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">
                      Art &amp; Design
                    </h4>
                    <span class="text-muted">97 Listings</span>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="cats-wrap text-center">
                <a href="listing-search-v1.html" class="Goodup-catg-wrap">
                  <div class="Goodup-catg-city">05 Cities</div>
                  <div class="Goodup-catg-icon">
                    <i class="fas fa-plane"></i>
                  </div>
                  <div class="Goodup-catg-caption">
                    <h4 class="fs-md mb-0 ft-medium m-catrio">
                      Hotel & Travel
                    </h4>
                    <span class="text-muted">42 Listings</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="space">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="m-spaced">
                <div class="position-relative">
                  <div class="mb-2">
                    <span class="bg-light-sky text-sky px-2 py-1 rounded">
                      Our Mission
                    </span>
                  </div>
                  <h2 class="ft-bold mb-3">
                    Claim Your Business & <br/>Get Started Today!<br/>
                  </h2>
                  <p class="mb-2">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p class="mb-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio.{" "}
                  </p>
                </div>
                <div class="position-relative row">
                  <div class="col-lg-4 col-md-4 col-4">
                    <h3 class="ft-bold text-sky mb-0">
                      <span class="count">07</span>+
                    </h3>
                    <p class="ft-medium">Business Listing</p>
                  </div>
                  <div class="col-lg-4 col-md-4 col-4">
                    <h3 class="ft-bold text-warning mb-0">
                      <span class="count">06</span>k+
                    </h3>
                    <p class="ft-medium">Popular Authors</p>
                  </div>
                  <div class="col-lg-4 col-md-4 col-4">
                    <h3 class="ft-bold text-danger mb-0">
                      <span class="count">200</span>+
                    </h3>
                    <p class="ft-medium">Countries</p>
                  </div>
                  <div class="col-lg-12 col-md-12 col-12 mt-3">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                    >
                      See Details<i class="lni lni-arrow-right-circle ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div class="position-relative">
                <img src="assets/img/bn-5.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space pt-0">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div class="position-relative">
                <img src="assets/img/bn-4.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="m-spaced">
                <div class="position-relative">
                  <div class="mb-1">
                    <span class="bg-light-success text-success px-2 py-1 rounded">
                      Process
                    </span>
                  </div>
                  <h2 class="ft-bold mb-3">
                    How it works & features <br />Around The Globe<br />
                  </h2>
                  <p class="mb-3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div class="uli-list-features">
                  <ul>
                    <li>
                      <div class="list-uiyt">
                        <div class="list-iobk">
                          <i class="fas fa-globe"></i>
                        </div>
                        <div class="list-uiyt-capt">
                          <h5>Find Businesses</h5>
                          <p>
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="list-uiyt">
                        <div class="list-iobk">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="list-uiyt-capt">
                          <h5>Review Listings</h5>
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod maxime
                            placeat facere possimus.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="list-uiyt">
                        <div class="list-iobk">
                          <i class="fas fa-phone"></i>
                        </div>
                        <div class="list-uiyt-capt">
                          <h5>Make a Reservation</h5>
                          <p>
                            Itaque earum rerum hic tenetur a sapiente delectus,
                            ut aut reiciendis voluptatibus maiores alias
                            consequatur aut perferendis.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space min gray">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div class="sec_title position-relative text-center mb-5">
                <h6 class="theme-cl mb-0">Our Pricing</h6>
                <h2 class="ft-bold">Choose Your Package</h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="Goodup-price-wrap">
                <div class="Goodup-author-header">
                  <div class="Goodup-price-currency">
                    <h3>
                      <span class="Goodup-new-price">
                        $<del>49</del>
                      </span>
                      <span class="Goodup-old-price">
                        $<del>149</del>
                      </span>
                    </h3>
                  </div>
                  <div class="Goodup-price-title">
                    <div class="Goodup-price-tlt">
                      <h4>Personal</h4>
                    </div>
                    <div class="Goodup-price-ribbon">
                      <span class="Goodup-ribbon-offer all">50% Off</span>
                    </div>
                  </div>
                  <div class="Goodup-price-subtitle">
                    Best Choice for Individuals{" "}
                  </div>
                </div>
                <div class="Goodup-price-body">
                  <ul class="price__features">
                    <li>
                      <i class="fa fa-angle-right"></i>Lifetime Bandwidth Usage
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>6 Months Support &amp;
                      Updates
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>10 Website License
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Quickstart Included
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Access to Plugins &amp;
                      Theme
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Branding/Copyright
                      Removal
                    </li>
                  </ul>
                </div>
                <div class="Goodup-price-bottom">
                  <a class="Goodup-price-btn" href="#">
                    <i class="fas fa-shopping-basket"></i> Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="Goodup-price-wrap">
                <div class="Goodup-author-header">
                  <div class="Goodup-price-currency">
                    <h3>
                      <span class="Goodup-new-price theme-cl">
                        $<del>129</del>
                      </span>
                      <span class="Goodup-old-price">
                        $<del>199</del>
                      </span>
                    </h3>
                  </div>
                  <div class="Goodup-price-title">
                    <div class="Goodup-price-tlt">
                      <h4>Platinum</h4>
                    </div>
                    <div class="Goodup-price-ribbon">
                      <span class="Goodup-ribbon-offer">50% Off</span>
                    </div>
                  </div>
                  <div class="Goodup-price-subtitle">
                    Best Choice for Individuals{" "}
                  </div>
                </div>
                <div class="Goodup-price-body">
                  <ul class="price__features">
                    <li>
                      <i class="fa fa-angle-right"></i>Lifetime Bandwidth Usage
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>12 Months Support &amp;
                      Updates
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>20 Website License
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Quickstart Included
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Access to Plugins &amp;
                      Theme
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Branding/Copyright
                      Removal
                    </li>
                  </ul>
                </div>
                <div class="Goodup-price-bottom">
                  <a class="Goodup-price-btn active" href="#">
                    <i class="fas fa-shopping-basket"></i> Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="Goodup-price-wrap">
                <div class="Goodup-author-header">
                  <div class="Goodup-price-currency">
                    <h3>
                      <span class="Goodup-new-price">
                        $<del>149</del>
                      </span>
                      <span class="Goodup-old-price">
                        $<del>249</del>
                      </span>
                    </h3>
                  </div>
                  <div class="Goodup-price-title">
                    <div class="Goodup-price-tlt">
                      <h4>Standard</h4>
                    </div>
                    <div class="Goodup-price-ribbon">
                      <span class="Goodup-ribbon-offer all">50% Off</span>
                    </div>
                  </div>
                  <div class="Goodup-price-subtitle">
                    Best Choice for Individuals{" "}
                  </div>
                </div>
                <div class="Goodup-price-body">
                  <ul class="price__features">
                    <li>
                      <i class="fa fa-angle-right"></i>Lifetime Bandwidth Usage
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Lifetime Support &amp;
                      Updates
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>50 Website License
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Quickstart Included
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Access to Plugins &amp;
                      Theme
                    </li>
                    <li>
                      <i class="fa fa-angle-right"></i>Branding/Copyright
                      Removal
                    </li>
                  </ul>
                </div>
                <div class="Goodup-price-bottom">
                  <a class="Goodup-price-btn" href="#">
                    <i class="fas fa-shopping-basket"></i> Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space min">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="sec_title position-relative text-center mb-4">
                <h6 class="theme-cl mb-0">Latest News</h6>
                <h2 class="ft-bold">Pickup New Updates</h2>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="gup_blg_grid_box">
                <div class="gup_blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img src="assets/img/b-4.jpg" class="img-fluid" alt="" />
                  </a>
                </div>
                <div class="gup_blg_grid_caption">
                  <div class="blg_tag">
                    <span>Marketing</span>
                  </div>
                  <div class="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        What Is a VPN and How Does It Work?
                      </a>
                    </h4>
                  </div>
                  <div class="blg_desc">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>
                <div class="crs_grid_foot">
                  <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div class="crs_fl_first">
                      <div class="crs_tutor">
                        <div class="crs_tutor_thumb">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/team-2.jpg"
                              class="img-fluid circle"
                              width="35"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="crs_fl_last">
                      <div class="foot_list_info">
                        <ul>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-eye text-success"></i>
                            </div>
                            <div class="elsio_tx">10k Views</div>
                          </li>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-clock text-warning"></i>
                            </div>
                            <div class="elsio_tx">10 July 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="gup_blg_grid_box">
                <div class="gup_blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img src="assets/img/b-5.jpg" class="img-fluid" alt="" />
                  </a>
                </div>
                <div class="gup_blg_grid_caption">
                  <div class="blg_tag">
                    <span>Business</span>
                  </div>
                  <div class="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        What Is Ransomware: The Ultimate Guide?
                      </a>
                    </h4>
                  </div>
                  <div class="blg_desc">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>
                <div class="crs_grid_foot">
                  <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div class="crs_fl_first">
                      <div class="crs_tutor">
                        <div class="crs_tutor_thumb">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/team-3.jpg"
                              class="img-fluid circle"
                              width="35"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="crs_fl_last">
                      <div class="foot_list_info">
                        <ul>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-eye text-success"></i>
                            </div>
                            <div class="elsio_tx">10k Views</div>
                          </li>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-clock text-warning"></i>
                            </div>
                            <div class="elsio_tx">10 July 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="gup_blg_grid_box">
                <div class="gup_blg_grid_thumb">
                  <a href="blog-detail.html">
                    <img src="assets/img/b-6.jpg" class="img-fluid" alt="" />
                  </a>
                </div>
                <div class="gup_blg_grid_caption">
                  <div class="blg_tag">
                    <span>Accounting</span>
                  </div>
                  <div class="blg_title">
                    <h4>
                      <a href="blog-detail.html">
                        Can iPads Get Viruses? What You Need
                      </a>
                    </h4>
                  </div>
                  <div class="blg_desc">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>
                <div class="crs_grid_foot">
                  <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div class="crs_fl_first">
                      <div class="crs_tutor">
                        <div class="crs_tutor_thumb">
                          <a href="javascript:void(0);">
                            <img
                              src="assets/img/team-5.jpg"
                              class="img-fluid circle"
                              width="35"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="crs_fl_last">
                      <div class="foot_list_info">
                        <ul>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-eye text-success"></i>
                            </div>
                            <div class="elsio_tx">10k Views</div>
                          </li>
                          <li>
                            <div class="elsio_ic">
                              <i class="fa fa-clock text-warning"></i>
                            </div>
                            <div class="elsio_tx">10 July 2021</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="space bg-cover"
        style={{ background: "#03343b url(assets/img/landing-bg.png) no-repeat;"}}
      >
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="sec_title position-relative text-center mb-5">
                <h6 class="text-light mb-0">Subscribr Now</h6>
                <h2 class="ft-bold text-light">
                  Get All Updates & Advance Offers
                </h2>
              </div>
            </div>
          </div>

          <div class="row align-items-center justify-content-center">
            <div class="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
              <form class="bg-white rounded p-1">
                <div class="row no-gutters">
                  <div class="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                    <div class="form-group mb-0 position-relative">
                      <input
                        type="text"
                        class="form-control b-0"
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <div class="form-group mb-0 position-relative">
                      <button
                        class="btn full-width btn-height theme-bg text-light fs-md"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Homelist;
