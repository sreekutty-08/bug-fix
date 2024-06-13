import React from 'react';


const Footer = () => {
  return (
    <div>
      <footer className="light-footer skin-light-footer style-2">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widget">
                  <img src="assets/img/logo.png" className="img-footer small mb-2" alt="" />
                  <div className="address mt-2">
                    7742 Sadar Street Range Road, USA<br />United Kingdom GHQ11
                  </div>
                  <div className="address mt-3">
                    40 568 423 6597<br />support@Goodup.com
                  </div>
                  <div className="address mt-2">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-facebook-filled"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-twitter-filled"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-youtube"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-instagram-filled"></i></a></li>
                      <li className="list-inline-item"><a href="#" className="theme-cl"><i className="lni lni-linkedin-original"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Main Navigation</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Explore Listings</a></li>
                    <li><a href="#">Browse Authors</a></li>
                    <li><a href="#">Submit Listings</a></li>
                    <li><a href="#">Shortlisted</a></li>
                    <li><a href="#">Dashboard</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Business Owners</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Browse Categories</a></li>
                    <li><a href="#">Payment Links</a></li>
                    <li><a href="#">Saved Places</a></li>
                    <li><a href="#">Dashboard</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">About Company</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Who We'r?</a></li>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Our team</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Dashboard</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Helpful Topics</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ's Page</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom br-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">© 2022 Goodup. Designed By <a href="https://themezhub.com">ThemezHub</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Log In Modal */}
      <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="loginmodal">
            <div className="modal-headers">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="ti-close"></span>
              </button>
            </div>

            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h4 className="m-0 ft-medium">Login Your Account</h4>
              </div>

              <form className="submit-form">
                <div className="form-group">
                  <label className="mb-1">User Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Username*" />
                </div>

                <div className="form-group">
                  <label className="mb-1">Password</label>
                  <input type="password" className="form-control rounded bg-light" placeholder="Password*" />
                </div>

                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-1">
                      <input id="dd" className="checkbox-custom" name="dd" type="checkbox" checked />
                      <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                    </div>
                    <div className="eltio_k2">
                      <a href="#" className="theme-cl">Lost Your Password?</a>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign In</button>
                </div>

                <div className="form-group text-center mb-0">
                  <p className="extra">Or login with</p>
                  <div className="option-log">
                    <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/c-1.png" className="img-fluid" alt="" />Login with Google</a></div>
                    <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/facebook.png" className="img-fluid" alt="" />Login with Facebook</a></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}

      {/* Share through social media model */}
      <div className="modal fade" id="share" tabIndex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="loginmodal">
            <div className="modal-headers">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="ti-close"></span>
              </button>
            </div>
            <div className="modal-body p-5">
              <div className="popup">
                <header></header>
                <div className="content1">
                  <p>Share</p>
                  <ul className="icons1">
                    <a href="#" id="facebook-share"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" id="twitter-share"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" id="linkedin-share"><i className="fab fa-linkedin"></i></a>
                    <a href="#" id="whatsapp-share"><i className="fab fa-whatsapp"></i></a>
                    <a href="#" id="telegram-share"><i className="fab fa-telegram-plane"></i></a>
                  </ul>
                  <p>Or copy link</p>
                  <div className="field1">
                    <i className="lni lni-link"></i>
                    <input type="text" className="form-control" id="share-link" readOnly />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}

      <a id="tops-button" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up"></i></a>
    </div>
  );
}

export default Footer;
