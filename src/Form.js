import { useForm, Controller } from "react-hook-form";
import Input from "./customehook/Input";
function Form() {
  const { register, handleSubmit, formState, control } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    alert("Form submitted");
  };

  return (
    <div id="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          className="input-field"
          register={register}
          error={errors.name?.message}
          type="text"
          placeholder="Name"
          name="name"
          rule={{
            required: {
              value: true,
              message: "name is Required",
            },
          }}
        />
        <Input
          className="input-field"
          register={register}
          error={errors.contact?.message}
          type="number"
          placeholder="Contact"
          name="contact"
          rule={{
            required: {
              value: true,
              message: "contact is Required",
            },
            maxLength: {
              value: 10,
              message: "Number should be 10 digit long",
            },
            minLength: {
              value: 10,
              message: "Number should be 10 digit long",
            },
          }}
        />
        <Input
          className="input-field"
          register={register}
          error={errors.email?.message}
          type="email"
          placeholder="email"
          name="email"
          rule={{
            required: {
              value: true,
              message: "email is Required",
            },
          }}
        />
        <br />
        <div id="gender-input">
          <>
            <Input
              className="radio-btn"
              register={register}
              type="radio"
              value="Male"
              name="gender"
              rule={{
                required: {
                  value: true,
                  message: "gender is Required",
                },
              }}
            />
            Male
          </>
          <>
            <Input
              className="radio-btn"
              register={register}
              type="radio"
              value="Female"
              name="gender"
            />
            Female
          </>
        </div>
        <p className="error-message">{errors.gender?.message}</p>
        <br />
        <button type="submit">SUBMIT</button>
        <h6>This form uses useForm hook</h6>
      </form>
    </div>
  );
}

export default Form;
