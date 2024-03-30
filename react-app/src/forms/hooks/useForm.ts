import { useState, ChangeEvent } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState(initialValues);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  const resetForm = () => setFormData(initialValues);

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isValidInput = (value: string) => value.trim().length !== 0;

  return {
    ...formData,
    formData,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
    isValidInput,
    isSubmitted,
  };
};
