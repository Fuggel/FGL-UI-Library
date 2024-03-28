import React from "react";


interface Props {
    type: "success" | "warning" | "error";
    message: string;
    className?: string;
    styles?: React.CSSProperties;
}

const Alert: React.FC<Props> = ({ type, message }) => {
    return (
        <div className={`alert ${type}`}>
            <p>{message}</p>
        </div>
    );
};


export default Alert;