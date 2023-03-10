import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { companyInputs } from "../../components/Utility/InputElements/CompanyInput";
import FormInput from "../../components/Utility/FormInput";
import { addCompanyApi, nullValues } from "./ApiCalls";

const AddCompany = () => {
  const [values, setValues] = React.useState({ ...nullValues });

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Company Add Api Callback
    const res = addCompanyApi();

    if (res.data.status === false) {
      toast.error(res.data.msg, toastOptions);
    }
    if (res.data.status === true) {
      toast.success(res.data.msg, toastOptions);
      setValues(...nullValues);
    }
  };

  const toastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  return (
    <section className="bg-slate-300">
      <section className=" w-full p-6 bg-slate-600 flex items-center justify-center ">
        <div className="w-full h-full bg-white p-6">
          <div>
            <h2 className="font-semibold text-xl ">Responsive Form</h2>
            <p className=" mb-6 ml-3 italic">
              Form is mobile responsive. Give it a try.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="" autoComplete="off">
            <div className="flex flex-wrap justify-between ">
              {companyInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="formInput mb-6 flex flex-col ">
                <label className="font-bold">Service Provide</label>
                <select
                  value={values.serviceProvide}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      serviceProvide: e.target.value,
                    })
                  }
                  className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                >
                  <option value="With Register">With Register</option>
                  <option value="Without Register">Without Register</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-300 p-4 rounded-lg font-bold"
            >
              Save
            </button>
          </form>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default AddCompany;
