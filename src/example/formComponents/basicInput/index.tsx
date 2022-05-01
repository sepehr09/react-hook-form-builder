import React, { forwardRef, ForwardRefExoticComponent, InputHTMLAttributes, RefAttributes } from "react";

type IBasicInput = ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & RefAttributes<unknown>>;

const BasicInput: IBasicInput = forwardRef((props, ref: any) => {
  console.log(props);

  return <input ref={ref} {...props} />;
});

export default BasicInput;
