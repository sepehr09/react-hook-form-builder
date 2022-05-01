import { ISchemaProps } from "../types";
import BasicInput from "./formComponents/basicInput";
import Button from "./formComponents/button/button";

export const elements = [
  { key: "BasicInput", element: BasicInput },
  { key: "Button", element: Button },
];
export type TSchemaType<TFormValues> = ISchemaProps<TFormValues>[];
