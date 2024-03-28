import React from "react";

import "./Button.scss";


interface Props {
    label: string;
    className?: string;
    styles?: React.CSSProperties;
}

const Button: React.FC<Props> = ({ label, className, styles }) => {
    return (
        <button className={className} style={styles}>
            {label}
        </button>
    );
};


export default Button;
