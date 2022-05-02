import { FormProvider } from "react-hook-form";
import { IFormBuilder } from "../../types";
import { isFunction } from "../../utils/helpers";
import ElementParser from "../elementParser";

const FormBuilder = <TFormValues extends Record<string, any> = Record<string, any>>({ methods, schema, onSubmit, children }: IFormBuilder<TFormValues>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit && isFunction(onSubmit) ? methods.handleSubmit(onSubmit) : undefined}>
        {children}

        {schema?.map((schema: any, index: any) => (
          <ElementParser key={index} schema={schema} />
        ))}
      </form>
    </FormProvider>
  );
};

export default FormBuilder;
