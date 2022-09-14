import React from "react";
import Link from "next/link";

const ErrorView = ({ backgroundColor = "#fff" }) => (
  <div className="error-area" style={{ backgroundColor }}>
    <div className="error-thumb">
      <h1
        style={{
          fontSize: "2em",
          color: "#000",
          fontWeight: "bold",
          paddingTop: "5%"
        }}
      >
        Opps! Page Not Found
      </h1>
      <p style={{ color: "#000" }}>
        The page you are looking is not available or has been removed.
      </p>
      <img
        src="/img/error.png"
        alt="error"
        style={{ display: "inline" }}
      />
    </div>
    <div className="error-content">
      <div>
        <div className="be-vidget back-block">
          <Link href="/">
            <a className="btn full size-1 themeBackground hover-1 text-bold">
              <i className="fa fa-plus" />
              Go Back to previous page
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorView;
