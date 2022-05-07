import React from "react";
import { useForm } from "react-hook-form";
import { FormBuilder } from "react-hook-form-builder";
import { schema } from "./constants";
import "./App.css";

function App() {
  const methods = useForm({
    defaultValues: {
      lastName: "doe",
    },
  });

  const { formState } = methods;
  const onSubmit = (data: any) => console.log("onSubmit", data, formState);

  return (
    <div className="App">
      <div>
        <header className="App-header">Test Form:</header>
        <FormBuilder methods={methods} schema={schema} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
