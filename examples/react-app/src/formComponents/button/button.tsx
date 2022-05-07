import React, { ButtonHTMLAttributes, ReactElement } from "react";

type IButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => ReactElement;

const Button: IButton = ({ fieldState, formState, ...restProps }: any) => {
  return <button {...restProps}>{restProps?.label}</button>;
};

export default Button;
