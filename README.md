# React hook form builder

Light weight schema Form builder for [react-hook-form](react-hook-form).

This package takes your schema and builds the form based on that using your own components.

## Installation

```bash
npm i react-hook-form react-hook-form-builder
```

or with yarn

```bash
yarn add react-hook-form react-hook-form-builder
```

## Usage

1. define your form elements:

```tsx
export const elements = [
  { key: "BasicInput", element: BasicInput },
  { key: "Button", element: Button },
];
```

2. wrap your root app with `<FormBuilderProvider />` and define your elements:

```tsx
import { FormBuilderProvider } from "react-hook-form-builder";
import { elements } from "../constants/elements.ts";

export default function App() {
  return (
    <div className="App">
      <FormBuilderProvider elements={elements}>
        ...
        {" your app ..."}
      </FormBuilderProvider>
    </div>
  );
}
```

3.  define your schema:

```tsx
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
```

4. in your desire form, just render your form using `<FormBuilder />` and pass your schema & react-hook-form methods:

```tsx
import { FormBuilder } from "react-hook-form-builder";
import { useForm } from "react-hook-form";
import { schema } from "../constants/contactUsPageSchema.ts";

export default function ContactUsPage() {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="contact-us-page">
      <FormBuilder methods={methods} schema={schema} onSubmit={onSubmit} />
    </div>
  );
}
```

# Documents

## schema props

| Type             | Type                                                 | Description                                      |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------ |
| key              | string                                               | unque key for each form element.                 |
| elementType      | string                                               | Define element type                              |
| props            | any                                                  | Props passing to element component.              |
| rules            | [HTML standard for form validation](html-validation) |                                                  |
| defaultValue     | any                                                  |                                                  |
| ignoreController | boolean                                              | ignore wrapping element inside `<Controller />`. |

[html-validation]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
[react-hook-form]: https://react-hook-form.com/

## Example element

```tsx
import React, { InputHTMLAttributes, ReactElement } from "react";

type IBasicInput = (props: InputHTMLAttributes<HTMLInputElement>) => ReactElement;

const BasicInput: IBasicInput = (props) => {
  return <input {...props} />;
};

export default BasicInput;
```
