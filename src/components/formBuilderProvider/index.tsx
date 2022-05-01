import React, { createContext } from "react";
import { IFormBuilderProvider } from "../../types";

export const FormBuilderContext = createContext({});

const FormBuilderProvider: IFormBuilderProvider = ({ children, elements }) => <FormBuilderContext.Provider value={{ elements }}>{children}</FormBuilderContext.Provider>;

export default FormBuilderProvider;
