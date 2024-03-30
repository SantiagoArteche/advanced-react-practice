import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...props} {...field} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="" />

      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
