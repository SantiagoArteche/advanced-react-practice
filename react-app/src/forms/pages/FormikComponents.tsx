import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export const formSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "First name must have at least 3 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Last name must have at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .min(3, "Email must have at least 5 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have at least 5 characters"),
  terms: Yup.boolean().oneOf([true], "Must accept the conditions"),
  jobType: Yup.string()
    .required("Job Type is required")
    .notOneOf([" "], "Choose a valid option"),
});

export const FormikComponents = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          password: "",
          email: "",
          lastName: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={formSchema}
      >
        {() => (
          <Form noValidate>
            <label htmlFor="firstName">First Name</label>
            <Field
              className="p-3 text-black"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" className="p-3 text-black" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="p-3 text-black" />
            <ErrorMessage name="password" component="span" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="p-3 text-black" />
            <ErrorMessage name="email" component="span" />
            <label>Job Type</label>
            <Field
              as="select"
              name="jobType"
              className="p-5 text-black text-xl"
            >
              <option value=" ">Pick some</option>
              <option value="DEV">Developer</option>
              <option value="DES">Designer</option>
              <option value="SR">IT SR</option>
              <option value="JR">IT JR</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field type="checkbox" name="terms" className="mr-2" />
              Terms And Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit" className="bg-blue-500 p-5">
              Send Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
