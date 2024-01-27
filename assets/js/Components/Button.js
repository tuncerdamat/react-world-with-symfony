import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Button (props) {
    const { className, ...otherProps } = props
    
    return (
        <button
            className={`btn ${className}`}
            {...otherProps}  // spreading all other attributes/props except the "className"
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string
}

// This fixes 'undefined' class name on the element
Button.defaultProps = {
    className: ''
}
