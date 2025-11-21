import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const ClientButton = ({ href, children, className = "", onClick }) => {
  // 👉 If href exists → behave like Link
  if (href) {
    return (
      <Link
        href={href}
        className={`client-button hidden lg:inline-block ${className}`}
      >
        {children}
      </Link>
    );
  }

  // 👉 If no href → behave like button (onClick works)
  return (
    <button
      onClick={onClick}
      className={`client-button hidden lg:inline-block ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

ClientButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ClientButton;
