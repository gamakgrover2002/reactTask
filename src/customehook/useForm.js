import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (value, options) => {
    let errorMessage = "";

    if (options?.required && !value) {
      errorMessage = options?.message || "This field is required";
    } else if (options?.pattern && !options.pattern.value.test(value)) {
      errorMessage = options.pattern.message || "Invalid format";
    } else if (options?.minLength && value.length < options.minLength.value) {
      errorMessage =
        options.minLength.message ||
        `Minimum length is ${options.minLength.value}`;
    } else if (options?.maxLength && value.length > options.maxLength.value) {
      errorMessage =
        options.maxLength.message ||
        `Maximum length is ${options.maxLength.value}`;
    } else if (options?.validate) {
      const customError = options.validate(value);
      if (customError) {
        errorMessage = customError;
      }
    }
    return errorMessage;
  };

  const register = (name, options) => {
    const onChangeHandler = (e) => {
      const newValue = e.target.value;
      setValues((prevValues) => ({ ...prevValues, [name]: newValue }));
      if (touched[name]) {
        const errorMessage = validate(newValue, options);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
      }
    };

    const onBlurHandler = (e) => {
      const newValue = e.target.value;
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
      const errorMessage = validate(newValue, options);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    };

    return {
      onChange: onChangeHandler,
      onBlur: onBlurHandler,
      name,
      value: values[name] || "",
    };
  };

  const handleSubmit = (e, fields) => {
    e.preventDefault();
    const validationErrors = {};
    fields.forEach((field) => {
      const errorMessage = validate(values[field.name], field.options);
      if (errorMessage) {
        validationErrors[field.name] = errorMessage;
      }
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, handle form submission here
      console.log("Form submitted successfully:", values);
    } else {
      // Validation errors exist
      console.log("Validation errors:", validationErrors);
    }
  };

  return { values, errors, touched, register, handleSubmit };
};

export default useForm;
