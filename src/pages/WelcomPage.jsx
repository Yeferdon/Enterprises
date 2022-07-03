import {React} from "react";
import {NavLink} from "react-router-dom";
import dinamicTitle from "../utils/dinamicTitle";

export const WelcomPage = () => {
  dinamicTitle("YeferDon.NET");
  return (
    <main className="container">
      <article className="text-center ">
        <img
          src="https://clipground.com/images/apple-clipart-logos-2.png"
          alt=""
          width={200}
        />
        <h1 className="my-4">Welcome to page of Yeferdon Developer</h1>
      </article>
      <nav>
        <ul className="d-flex list-unstyled">
          <li className="mx-3">
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1000"
              className="btn btn-dark"
              to="/enterprises"
            >
              Enterprises
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1000"
              className="btn btn-dark"
              to="/manager"
            >
              Manager Enterprises
            </NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
};
