import { FieldPath, FormProvider } from "react-hook-form";
import { IFormBuilder } from "../../types";
import ElementParser from "../elementParser";

const FormBuilder = <TFormValues extends Record<string, any> = Record<string, any>, TContext extends FieldPath<TFormValues> = FieldPath<TFormValues>>({
  methods,
  schema,
  onSubmit,
  children,
}: IFormBuilder<TFormValues, TContext>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && typeof onSubmit === "function" ? methods.handleSubmit(onSubmit) : undefined}>
        {children}

        {schema?.map((element: any, index: any) => (
          <ElementParser<TFormValues, TContext> key={index} element={element} />
        ))}
      </form>
    </FormProvider>
  );
};

export default FormBuilder;
