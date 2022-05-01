import React, { useContext } from "react";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { IElementParser } from "../../types";
import { FormBuilderContext } from "../formBuilderProvider";

const ElementParser = <TFormValues, TName extends FieldPath<TFormValues> = FieldPath<TFormValues>>({ element }: IElementParser<TFormValues, TName>) => {
  const formBuilderContext: any = useContext(FormBuilderContext);
  const { control, register } = useFormContext(); // retrieve all hook methods

  const Element = formBuilderContext?.elements?.find((a: any) => a.key === element?.elementType)?.element;

  if (!Element) return <></>;
  return (
    <Controller
      name={element?.key}
      control={control}
      rules={element.rules}
      defaultValue={element.defaultValue}
      render={({ field, fieldState, formState }) => <Element {...{ fieldState, formState, ...field, ...element.props }} />}
    />
  );
};

export default ElementParser;
