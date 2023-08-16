import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  link: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonLinkProps> = ({
  link,
  icon,
  label,
  className,
}) => {
  return (
    <Link to={link} className={`flex items-center ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      <AiOutlineArrowRight size={20} className="ml-2" />
    </Link>
  );
};

export default Button;
