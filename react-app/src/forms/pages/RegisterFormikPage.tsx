import "../styles/styles.css";
import { Formik, Field, ErrorMessage, Form } from "formik";

import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string()
    .required("First Name is required")
    .min(2, "First name must have at least 3 characters"),

  email: Yup.string()
    .required("Email is required")
    .min(2, "Email must have at least 5 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 5 characters"),
  repeatPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password")], "The passwords must be equals"),
});

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-10 text-center">Register Formik Page</h1>

      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values, actions): void => {
          console.log(values);
          actions.resetForm();
        }}
        validateOnChange={false}
        validationSchema={formSchema}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <Field
              className="p-3 text-black"
              name="name"
              type="text"
              placeholder="name"
            />
            <ErrorMessage component="span" name="name" />
            <Field
              className="p-3 text-black"
              name="email"
              type="text"
              placeholder="email"
            />
            <ErrorMessage component="span" name="email" />
            <Field
              className="p-3 text-black"
              name="password"
              type="text"
              placeholder="password"
            />
            <ErrorMessage component="span" name="password" />
            <Field
              className="p-3 text-black"
              name="repeatPassword"
              type="text"
              placeholder="repeatPassword"
            />
            <ErrorMessage component="span" name="repeatPassword" />
            <button type="submit" className="bg-blue-500 p-3">
              Create
            </button>
            <button onClick={handleReset} className="bg-blue-500 p-3">
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
