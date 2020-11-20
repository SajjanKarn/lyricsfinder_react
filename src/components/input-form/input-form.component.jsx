import "./input-form.styles.css";

const FormInput = ({ id, label, ...otherProps }) => {
  return (
    <div class="form-group">
      <label style={{fontWeight: "400"}} htmlFor={id}>{label}</label>
      <input class="form-control" id={id} {...otherProps} />
    </div>
  );
};

export default FormInput;
