import React from "react";

function Header() {
  return (
    <>
      <header>
        {/* Start Navbar */}
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top data ">
          <div className="container">
            <a className="navbar-brand " href="/">
              <img src="./src/assets/images/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              href="#offcanvasExample"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse offcanvas offcanvas-end"
              data-bs-scroll="true"
              id="offcanvasNavbar"
              tabIndex={-1}
            >
              <div className="offcanvas-header w-100 align-items-center">
                <h2 className="mb-0">BCR</h2>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="#our-service-section"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#why-section">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#testimony-section">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#faq-section">
                    FAQ
                  </a>
                </li>
                <li className="buton">
                  <button
                    className="btn btn-success  fw-bold ms-md-2 "
                    type="submit"
                    id="register-button"
                  >
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End of Navbar */}
        {/* Start of Hero */}
        <div className="jumbotron-fluid jumbotron" id="hero-section">
          <div className="coontainer-fluid">
            <div className="row">
              <div
                className="jumbotron-text me-4 col-md-5 col-sm-12"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <h1 className="fw-bold">
                  Sewa &amp; Rental Mobil Terbaik di Kawasan Sidoarjo
                </h1>
                <p className="pe-5">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
                  melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
                </p>
                <a href="/cars">
                  <button className="btn btn-success fw-bold">
                    Mulai Sewa Mobil
                  </button>
                </a>
              </div>
              <div
                className="col jumbotron-img pb-md-0"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <img
                  src="./src/assets/images/img_car.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Hero */}
      </header>
    </>
  );
}

export default Header;
