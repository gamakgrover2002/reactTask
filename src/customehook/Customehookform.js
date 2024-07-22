import React from "react";
import useForm from "./useForm";

const Customhookform = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      name: "",
      email: "",
      contact: "",
    });

  return (
    <form className="customehook-form" onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type="text"
          className="input-field"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Name"
        />
        <p className="error-message">
          {touched.name && errors.name && <span>{errors.name}</span>}
        </p>
      </div>
      <div>
        <input
          type="email"
          className="input-field"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        <p className="error-message">
          {touched.email && errors.email && <span>{errors.email}</span>}
        </p>
        <input
          type="number"
          className="input-field"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Contact"
        />
        <p className="error-message">
          {touched.contact && errors.contact && <span>{errors.contact}</span>}
        </p>
      </div>
      <button type="submit">Submit</button>
      <h6>This form uses custom made hook</h6>
    </form>
  );
};

export default Customhookform;
