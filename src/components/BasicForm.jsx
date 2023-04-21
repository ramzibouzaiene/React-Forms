import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm = () => {
  const {
    values,
    error,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPass: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={values.email}
        onChange={handleChange}
        id="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={error.email && touched.email ? "input-error" : ""}
      />
      {error.email && touched.email && <p className="error">{error.email}</p>}
      <label htmlFor="email">Age</label>
      <input
        type="number"
        value={values.age}
        onChange={handleChange}
        id="age"
        placeholder="Enter your age"
        onBlur={handleBlur}
        className={error.age && touched.age ? "input-error" : ""}
      />
      {error.age && touched.age && <p className="error">{error.age}</p>}
      <label htmlFor="email">Password</label>
      <input
        type="password"
        value={values.password}
        onChange={handleChange}
        id="password"
        placeholder="Enter your password"
        onBlur={handleBlur}
        className={error.password && touched.password ? "input-error" : ""}
      />
      {error.password && touched.password && (
        <p className="error">{error.password}</p>
      )}
      <label htmlFor="email">Confirm Your Password</label>
      <input
        type="password"
        value={values.confirmPass}
        onChange={handleChange}
        id="confirmPass"
        placeholder="Confirm password"
        onBlur={handleBlur}
        className={
          error.confirmPass && touched.confirmPass ? "input-error" : ""
        }
      />
      {error.confirmPass && touched.confirmPass && (
        <p className="error">{error.confirmPass}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
