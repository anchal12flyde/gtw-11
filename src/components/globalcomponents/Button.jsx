import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ClientButton = ({ href, children, className = "" }) => {
  return (
    <>
    
      <Link
        href={href}
        className={`client-button hidden lg:inline-block ${className}`}
      >
        {children}
      </Link>

     
      <Link
        href={href}
         className={`mobile-login-btn !inline-block lg:!hidden ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

ClientButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ClientButton;
