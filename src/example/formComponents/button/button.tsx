import React, { ButtonHTMLAttributes, ReactElement } from "react";

type IButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => ReactElement;

const Button: IButton = (props: any) => {
  return <button {...props}>{props?.label}</button>;
};

export default Button;
