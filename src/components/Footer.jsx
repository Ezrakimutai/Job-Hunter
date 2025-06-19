import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return <div className="text-center "> © {date}</div>;
};

export default Footer;
