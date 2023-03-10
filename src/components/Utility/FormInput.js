
const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;


  return (
    <div className="formInput mb-6 flex flex-col ">
      <label className="font-bold">{label}</label>
      <input
      className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;