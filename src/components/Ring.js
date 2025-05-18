import React, { memo } from "react";
import PropTypes from "prop-types";
import "./styles/components.css";

const Ring = memo(function Ring({ altText = "Walter House Logo" }) {
  return (
    <div className="container ring-container">
      <div className="ring rounded-full" role="presentation">
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <div className="image">
          <img 
            src="images/ash-pic.webp" 
            className="img-fluid rounded-full" 
            alt={altText}
          />
        </div>
      </div>
    </div>
  );
});

Ring.propTypes = {
  altText: PropTypes.string,
};

export default Ring;
