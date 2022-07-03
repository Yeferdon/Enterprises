import React from "react";
import dinamicTitle from "../utils/dinamicTitle";

const PageNotFound = () => {
  dinamicTitle("Page Not Found");
  return (
    <div className="not-found">
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt=""
      />
      <h1>404</h1>
      <h1>This page isn't available. Sorry about that.</h1>
    </div>
  );
};

export default PageNotFound;
