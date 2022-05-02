import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormBuilder from "../components/formBuilder";

const schema = [
  {
    key: "firstName",
    elementType: "BasicInput",
    defaultValue: "john",
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
    ignoreController: true,
    props: ({ formState: { isDirty } }: any) => ({
      type: "submit",
      label: isDirty ? "Save" : "Submit",
    }),
  },
];

const ExampleAppHomePage = () => {
  const methods = useForm({
    defaultValues: {
      lastName: "doe",
    },
  });
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
