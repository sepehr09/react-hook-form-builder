import React from "react";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { IElementParser } from "../../types";
import { isFunction } from "../../utils/helpers";
import { FormBuilderContext } from "../formBuilderProvider";

const ElementParser = <TFieldValues extends FieldValues = FieldValues>({ schema }: IElementParser<TFieldValues>) => {
  const formBuilderContext: any = React.useContext(FormBuilderContext);
  const formProps = useFormContext(); // retrieve all hook methods

  const Element = formBuilderContext?.elements?.find((a: any) => a.key === schema?.elementType)?.element;
  if (!Element) return <></>;

  const schemaProps = schema.props && isFunction(schema.props) ? schema.props(formProps) : schema.props;

  if (schema.ignoreController) return <Element {...schemaProps} />;

  return (
    <Controller
      name={`${schema?.key}` as const}
      control={formProps.control}
      rules={schema.rules}
      defaultValue={schema.defaultValue}
      render={({ field, fieldState, formState }) => <Element {...{ fieldState, formState, ...field, ...schemaProps }} />}
    />
  );
};

export default ElementParser;
