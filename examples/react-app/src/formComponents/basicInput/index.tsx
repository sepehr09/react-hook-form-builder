import React, { forwardRef, ForwardRefExoticComponent, InputHTMLAttributes, RefAttributes } from "react";

type IBasicInput = ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & RefAttributes<unknown>>;

const BasicInput: IBasicInput = forwardRef(({ fieldState, formState, ...restProps }: any, ref: any) => {
  return <input ref={ref} {...restProps} />;
});

export default BasicInput;
