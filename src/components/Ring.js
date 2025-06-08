import React, { memo } from "react";
import PropTypes from "prop-types";
import "./styles/components.css";

const Ring = memo(function Ring({ altText = "Walter House Logo" }) {
  return (
    <div className="container ring-container">
      <div className="ring rounded-full group" role="presentation">
        <i aria-hidden="true" className="dark:border-gray-700"></i>
        <i aria-hidden="true" className="dark:border-gray-700"></i>
        <i aria-hidden="true" className="dark:border-gray-700"></i>
        <div className="image">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 dark:from-green-500 dark:to-blue-600"></div>
            <img 
              src="images/ash-pic.webp" 
              className="img-fluid rounded-full ring-2 ring-offset-2 ring-green-500/30 dark:ring-green-400/30 dark:ring-offset-gray-900"
              alt={altText}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Ring.propTypes = {
  altText: PropTypes.string,
};

export default Ring;
