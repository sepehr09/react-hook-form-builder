import BasicInput from "../formComponents/basicInput";
import Button from "../formComponents/button/button";

export const elements = [
  { key: "BasicInput", element: BasicInput },
  { key: "Button", element: Button },
];

export const schema = [
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
