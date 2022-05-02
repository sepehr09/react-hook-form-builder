import { ReactElement } from "react";
import { FieldPathValue, RegisterOptions, SubmitHandler, UnpackNestedValue, UseFormReturn } from "react-hook-form";

export type IFormBuilderProvider = (args: { children: ReactElement; elements: any[] }) => ReactElement;

export type IFormBuilder<TFormValues> = {
  onSubmit?: SubmitHandler<TFormValues>;
  children?: React.ReactNode;
  schema: ISchemaProps<TFormValues>[];
  methods: UseFormReturn<TFormValues>;
};

export interface IElementParser<TFormValues> {
  schema: ISchemaProps<TFormValues>;
}

export interface ISchemaProps<TFormValues extends Record<string, any> = Record<string, any>> {
  key: string;
  // key: FieldName<TFormValues>;
  elementType: string;
  props: any;
  rules?: Exclude<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
  defaultValue?: UnpackNestedValue<FieldPathValue<TFormValues, any>>;
  ignoreController?: boolean;
}
