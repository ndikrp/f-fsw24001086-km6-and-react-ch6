import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav id="navbar">
          <div className="container">
            <a className="navbar-brand ms-0" href="/">
              <img src="" alt="" />
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse offcanvas offcanvas-end"
              data-bs-scroll="true"
              id="offcanvasNavbar"
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
              {/* Sampai sini dulu */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
