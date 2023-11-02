import React from "react";

import "./Button.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  to?: string;
  href?: string;
  type:"submit" | "button"
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler;
  disabled: boolean;
};

const Button = (props: ButtonProps) => {
  const { to, href, children, className, onClick, disabled } = props;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  } else if (href)
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  else
    return (
      <button className={className} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
};

export default Button;
