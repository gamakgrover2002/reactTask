import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          className="input-field"
          placeholder="Name"
        />
        <p className="error-message">{errors.name?.message}</p>
        <br />

        <input
          type="text"
          placeholder="Date of Birth"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          {...register("dateOfBirth", {
            required: "Date of birth is required",
          })}
          className="input-field"
        />
        <p className="error-message">{errors.dateOfBirth?.message}</p>
        <br />

        <input
          id="email-input"
          {...register("email", {
            required: "Email is required",
          })}
          className="input-field"
          type="email"
          placeholder="Email"
        />
        <p className="error-message">{errors.email?.message}</p>
        <br />

        <input
          id="contact-input"
          {...register("contact", {
            required: "Contact is required",
            minLength: {
              value: 10,
              message: "Incorrect number: number too short",
            },
            maxLength: {
              value: 10,
              message: "Incorrect number: number too long",
            },
          })}
          className="input-field"
          type="number"
          placeholder="Contact"
        />
        <p className="error-message">{errors.contact?.message}</p>
        <br />

        <button type="submit">SUBMIT</button>
        <h6>This form uses useForm hook</h6>
      </form>
    </>
  );
}

export default Form;
