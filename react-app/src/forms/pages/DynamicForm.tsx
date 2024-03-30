import formJson from "../data/custom-form.json";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};

const requiredField: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Must have at least ${(rule as any).value || 2} characters`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Must be an email, review the format");
    }
  }

  requiredField[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredField });
export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Formik</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values /*, actions */) => {
          console.log(values);
        }}
        validateOnChange={false}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ type, label, placeholder, name, as, options }) => {
              if (as && options) {
                return (
                  <div key={name}>
                    <Field
                      type={type}
                      label={label}
                      placeholder={placeholder}
                      name={name}
                      className="text-black p-3 w-full"
                      as={as}
                    >
                      {options.map((opt) => (
                        <option value={opt.id} key={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name={name} component="span" />
                  </div>
                );
              }

              return (
                <div key={name}>
                  <Field
                    type={type}
                    label={label}
                    placeholder={placeholder}
                    name={name}
                    className="text-black p-3 w-full"
                    as={as}
                  />
                  <ErrorMessage name={name} component="span" />
                </div>
              );
            })}
            <button type="submit" className="p-3 bg-blue-500">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
