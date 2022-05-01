import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormBuilder from "../components/formBuilder";

const schema = [
  {
    key: "firstName",
    elementType: "BasicInput",
    props: {
      placeholder: "First Name",
    },
  },
  {
    key: "lastName",
    elementType: "BasicInput",
    props: {
      placeholder: "Last Name",
    },
  },
  {
    key: "submit",
    elementType: "Button",
    props: {
      type: "submit",
      label: "save",
    },
  },
];

const ExampleAppHomePage = () => {
  const methods = useForm();
  const { formState } = methods;
  const onSubmit = (data: any) => console.log(data, formState);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div>
      <h1>Registration Form:</h1>
      <FormBuilder methods={methods} schema={schema} onSubmit={onSubmit} />
    </div>
  );
};

export default ExampleAppHomePage;
