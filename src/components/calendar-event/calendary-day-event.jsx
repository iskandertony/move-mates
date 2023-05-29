import React from "react";

const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: children.props.date < new Date() ? 'lightgrey' : 'white',
        },
    });
