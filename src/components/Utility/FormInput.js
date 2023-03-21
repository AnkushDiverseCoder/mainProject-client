
const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;


  return (
    <div className="formInput mb-6 flex flex-col ">
      <label className="font-semibold text italic">{label}</label>
      <input
      className="h-10 border mt-1 rounded px-4  bg-[#f8f6c1] mb"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;