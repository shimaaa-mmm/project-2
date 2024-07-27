import React from "react";

const HeaderContent = () => {
  return (
    <div className="header-content ">
      <div className="centered-content overlay2">
        <div className="content-container">
          <p>The Best Domain & Hosting Provider In The Area</p>
          <h1>Go Big With Your Next Domain</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Find your domain" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
