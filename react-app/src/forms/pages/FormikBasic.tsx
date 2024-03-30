import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  password: string;
  email: string;
  lastName: string;
}

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
});

export const FormikBasic = () => {
  const { handleSubmit, errors, touched, resetForm, getFieldProps, isValid } =
    useFormik<FormValues>({
      initialValues: {
        firstName: "",
        password: "",
        email: "",
        lastName: "",
      },
      validateOnChange: false,
      validateOnMount: true,
      onSubmit: (values) => {
        console.log(values);
        resetForm();
      },
      validationSchema: formSchema,
    });
  console.log(isValid);

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          className="p-3 text-black"
          type="text"
          {...getFieldProps("firstName")}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input
          {...getFieldProps("lastName")}
          className="p-3 text-black"
          type="text"
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="password">Password</label>
        <input
          {...getFieldProps("password")}
          className="p-3 text-black"
          type="password"
        />
        {touched.password && errors.password && <span>{errors.password}</span>}

        <label htmlFor="email">Email</label>
        <input
          {...getFieldProps("email")}
          type="email"
          className="p-3 text-black"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit" className="bg-blue-500 p-5">
          Send Form
        </button>
      </form>
    </div>
  );
};
