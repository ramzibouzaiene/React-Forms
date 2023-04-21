import { useField } from "formik";

const CustomCheckbox = ({ input, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <label>{label}</label>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </div>
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomCheckbox;
