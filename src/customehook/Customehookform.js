import React from "react";
import useForm from "./useForm";

const MyForm = () => {
  const initialValues = { name: "", email: "" };
  const { values, errors, register, handleSubmit } = useForm(initialValues);

  const onSubmit = (e) => {
    const fields = [
      { name: "name", options: { required: true } },
      {
        name: "email",
        options: {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        },
      },
    ];
    handleSubmit(e, fields);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
