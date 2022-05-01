import { ReactElement } from "react";
import { FieldPath, FieldPathValue, RegisterOptions, SubmitHandler, UnpackNestedValue, UseFormReturn } from "react-hook-form";

export type IFormBuilderProvider = (args: { children: ReactElement; elements: any[] }) => ReactElement;

export type IFormBuilder<TFormValues, TName extends FieldPath<TFormValues> = FieldPath<TFormValues>> = {
  onSubmit?: SubmitHandler<TFormValues>;
  children?: React.ReactNode;
  schema: ISchemaProps<TFormValues, TName>[];
  methods: UseFormReturn<TFormValues>;
};

export interface IElementParser<TFormValues, TName extends FieldPath<TFormValues> = FieldPath<TFormValues>> {
  element: ISchemaProps<TFormValues, TName>;
}

export interface ISchemaProps<TFormValues = Record<string, any>, TName extends FieldPath<TFormValues> = FieldPath<TFormValues>> {
  key: TName;
  elementType: string;
  props: any;
  rules?: Omit<RegisterOptions<TFormValues, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  defaultValue?: UnpackNestedValue<FieldPathValue<TFormValues, TName>>;
}
