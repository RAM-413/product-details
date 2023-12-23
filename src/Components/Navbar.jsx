import React from "react";
import imglogo from "../Images/Nav-logo.png";
import imglogo1 from "../Images/nav-logo2.png";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";


export const Navbar = () => {
  // // preloader
    // setTimeout(() => {
    //   preloader.classList.add("d-none");
    //   document.body.classList.remove("overflow-hidden");
    // }, 2000);

  return (
    <div>
      {/* <!-- preloader --> */}
      {/* <div
        id="preloader"
        class="min-vh-100 h-100 bg-black d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 z-11 flex-column"
      >
        <div class="loader">loading...</div>
      </div> */}
      <header>
        <Container>
          <div className="d-lg-flex justify-content-between py-2 d-none ">
            <img src={imglogo} alt="logo" className="d-none d-lg-block" />
            <img src={imglogo1} alt="Offer" className="d-none d-lg-block" />
          </div>
        </Container>
        <Nav className="nav-bar py-29">
          <Container>
            <div className=" d-flex align-items-center justify-content-between w-100">
              <img src={imglogo} alt="" className=" d-block d-lg-none" />
              <label for="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menu-icon" hidden />
              <ul className=" d-flex align-items-end gap-4 mobile-view m-0 p-0">
                <li>
                  <a className="header-links" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    SNEAKERS KOPEN
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    INTERVIEWS
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    SALE
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    SNEAKER VAN DE DAG
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    SNEAKER FORUM
                  </a>
                </li>
                <li>
                  <a className="header-links" href="#">
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </Nav>
      </header>
    </div>
  );
};
export default Navbar;
