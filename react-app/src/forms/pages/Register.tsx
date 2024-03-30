import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}
export const Register = () => {
  const {
    email,
    name,
    password,
    repeatPassword,
    onChange,
    onSubmit,
    resetForm,
    isValidInput,
    isValidEmail,
    isSubmitted,
  } = useForm<FormData>({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });

  return (
    <div>
      <h1 className="text-5xl mb-10 text-center">Register</h1>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          className={`p-5 text-black ${
            !isValidInput(name) && isSubmitted && "has-error"
          }`}
          onChange={onChange}
          name="name"
          value={name}
        />
        {!isValidInput(name) && isSubmitted && (
          <span>Este campo es necesario</span>
        )}
        <input
          type="email"
          placeholder="Email"
          className={`p-5 text-black ${
            !isValidEmail(email) && isSubmitted && "has-error"
          }`}
          onChange={onChange}
          name="email"
          value={email}
        />
        {!isValidEmail(email) && isSubmitted && (
          <span>Este campo es necesario</span>
        )}
        <input
          type="password"
          placeholder="Password"
          className={`p-5 text-black ${
            !isValidInput(password) && isSubmitted && "has-error"
          } ${
            password !== repeatPassword &&
            isSubmitted &&
            isValidInput(password) &&
            isValidInput(repeatPassword) &&
            "has-error"
          }`}
          onChange={onChange}
          name="password"
          value={password}
        />
        {!isValidInput(password) && isSubmitted && (
          <span>Este campo es necesario</span>
        )}
        <input
          type="password"
          className={`p-5 text-black ${
            !isValidInput(repeatPassword) && isSubmitted && "has-error"
          } ${
            password !== repeatPassword &&
            isSubmitted &&
            isValidInput(password) &&
            isValidInput(repeatPassword) &&
            "has-error"
          }`}
          placeholder="Repeat password"
          onChange={onChange}
          name="repeatPassword"
          value={repeatPassword}
        />
        {!isValidInput(repeatPassword) && isSubmitted && (
          <span>Este campo es necesario</span>
        )}
        {password !== repeatPassword &&
          isSubmitted &&
          isValidInput(password) &&
          isValidInput(repeatPassword) && (
            <span>Las contrasenias deben ser iguales</span>
          )}
        <button type="submit" className="bg-blue-500">
          Create
        </button>
        <button onClick={resetForm} className="bg-red-500">
          Reset
        </button>
      </form>
    </div>
  );
};
