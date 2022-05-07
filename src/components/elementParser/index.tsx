import React, { useEffect } from "react";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { IElementParser } from "../../types";
import { isFunction } from "../../utils/helpers";
import { FormBuilderContext } from "../formBuilderProvider";

const ElementParser = <TFieldValues extends FieldValues = FieldValues>({ schema }: IElementParser<TFieldValues>) => {
  const formBuilderContext: any = React.useContext(FormBuilderContext);
  const formProps = useFormContext(); // retrieve all hook methods
  const { props, onDidMount, onDidUnMount } = schema;
  const Element = formBuilderContext?.elements?.find((a: any) => a.key === schema?.elementType)?.element;

  const schemaProps = props && isFunction(props) ? props(formProps) : props;

  /**
   * onDidMount is a function that will be called after the field is mounted.
   * onDidUnMount is a function that will be called after the field is unmounted.
   */
  useEffect(() => {
    if (onDidMount && isFunction(onDidMount)) {
      onDidMount(formProps);
    }

    return () => {
      if (onDidUnMount && isFunction(onDidUnMount)) {
        onDidUnMount(formProps);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDidMount, onDidUnMount]);

  if (!Element) return <></>;
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
