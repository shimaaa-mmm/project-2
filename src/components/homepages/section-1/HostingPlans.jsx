import React from "react";
import "./index.scss";

const HostingPlans = () => {
  const plans = [
    {
      icon: "cloud",
      title: "Share Hosting",
      description: "Easy drag and drop fully customizable mobile friendly",
      price: "$2.5/m",
      color: "#0066FF",
    },
    {
      icon: "globe",
      title: "VPS Hosting",
      description: "Easy drag and drop fully customizable mobile friendly",
      price: "$2.5/m",
      color: "#9F00FF",
    },
    {
      icon: "wordpress",
      title: "Wordpress Hosting",
      description: "Easy drag and drop fully customizable mobile friendly",
      price: "$2.5/m",
      color: "#FF0099",
    },
    {
      icon: "server",
      title: "Dedicated Hosting",
      description: "Easy drag and drop fully customizable mobile friendly",
      price: "$2.5/m",
      color: "#FFCC00",
    },
  ];

  return (
    <div className="hosting-plans">
      <div className="header-content">
        <h2 className="title">Our Hosting Plans</h2>
        <p className="pad">
          Your domain control panel is designed for ease-of-use and
          <br></br>
          allows for all aspects of your domains.
        </p>
        <br></br>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan" key={index}>
            <div className="icon" style={{ color: plan.color }}>
              <i className={`fas fa-${plan.icon}`}></i>
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <div className="price">
              <span>Start from </span>
              <strong>{plan.price}</strong>
            </div>
            <button className="start-now">Start Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingPlans;
