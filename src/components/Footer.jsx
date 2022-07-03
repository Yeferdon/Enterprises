import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="nav nav-pills flex-column flex-sm-row">
        <a
          className="flex-sm-fill text-sm-center nav-link active"
          aria-current="page"
          href="#"
        >
          <i className="mx-3 bi bi-apple"></i>
          Apple
        </a>
        <a className="flex-sm-fill text-sm-center text-dark nav-link" href="#">
          <i className="mx-3 bi bi-microsoft"></i>
          Microsoft
        </a>
        <a className="flex-sm-fill text-sm-center nav-link active" href="#">
          <i className="mx-3 bi bi-meta"></i>
          Meta
        </a>
        <a
          className="flex-sm-fill text-sm-center  text-dark nav-link "
          href="#"
        >
          <i className="mx-3 bi bi-playstation"></i>
          Playstation
        </a>
      </footer>
    </>
  );
};

export default Footer;
