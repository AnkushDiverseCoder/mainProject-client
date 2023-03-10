import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { companyInputs } from "../../components/Utility/InputElements/CompanyInput";
import FormInput from "../../components/Utility/FormInput";

const Modify = () => {
  const [values, setValues] = React.useState({
    companyName: "",
    companyAddress: "",
    state: "",
    district: "",
    authorizedPersonName: "",
    authorizedContactNumber: "",
    companyEmailId: "",
    panNumber: "",
    epfCodeNumber: "",
    gstNumber: "",
    esicCodeNumber: "",
    professionalTax: "",
    tanNumber: "",
    workPlaceName: "",
    serviceProvide: "",
    dateOfCommencement: "",
    professionalFees:"",
    licenceNumber:"",
    officeName:"",
    natureOfBusiness:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-slate-300">
      <Navbar />
      <section className=" w-full p-6 bg-slate-600 flex items-center justify-center ">
        <div className="w-full h-full bg-white p-6">
          <div>
            <h2 className="font-semibold text-xl ">Responsive Form</h2>
            <p className=" mb-6 ml-3 italic">
              Form is mobile responsive. Give it a try.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="" autocomplete="off">
              <div className="flex flex-wrap justify-between ">
                {companyInputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>
              <button type="submit" className="bg-red-300 p-4 rounded-lg font-bold">
                     Save
              </button>
            </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Modify;

