import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckbox";

const formSchema = Yup.object({
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

export const FormikAbstract = () => {
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
        validateOnChange={false}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={formSchema}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              name="firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <MyTextInput
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
            />
            <MyTextInput
              type="password"
              name="password"
              label="password"
              placeholder="Password"
            />
            <MyTextInput
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
            />

            <MySelect
              name="jobType"
              label="Job Type"
              className="p-5 text-black text-xl"
            >
              <option value=" ">Pick some</option>
              <option value="DEV">Developer</option>
              <option value="DES">Designer</option>
              <option value="SR">IT SR</option>
              <option value="JR">IT JR</option>
            </MySelect>

            <MyCheckbox label={"Terms And Conditions"} name={"terms"} />

            <button type="submit" className="bg-blue-500 p-5">
              Send Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
