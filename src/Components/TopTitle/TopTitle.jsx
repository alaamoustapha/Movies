import React from "react";
import "./TopTitle.css";

function TopTitle({ sub, title }) {
  return (
    <div className="top-title">
      <h5 className="top-title-sub">{sub}</h5>
      <h2 className="top-title-title">{title}</h2>
    </div>
  );
}

export default TopTitle;
