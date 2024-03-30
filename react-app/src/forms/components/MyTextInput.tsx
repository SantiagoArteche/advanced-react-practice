import { useField, ErrorMessage } from "formik";

interface Props {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="p-5 text-black" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="" />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} hace lo mismo que ErrorMessage*/}
    </>
  );
};
