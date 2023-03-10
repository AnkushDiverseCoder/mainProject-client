import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FormInput from "./FormInput.js";

const Salary = () => {

  const [values, setValues] = React.useState({
    aadharNumber: "",
    nameAsPerAadhar: "",
    dob: "",
    otherDetailsIfAny: "",
    bankName:"",
    bankBranch: "",
    accountNumber: "",
    ifscCode: "",
    calculation: "",
    epfMemberId: "",
    uanNumber: "",
    esicIpNumber: "",
    bonusApplicable: "",
    gratuityApplicable: "",
    nomineeName: "",
    relationshipWithMember: "",
    familyParticular:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const inputs = [
    {
      id: 1,
      name: "aadharNumber",
      type: "text",
      placeholder: "aadharNumber",
      label: "Aadhar Number",
      required: true,
    },
    {
      id: 2,
      name: "nameAsPerAadhar",
      type: "text",
      placeholder: "nameAsPerAadhar",
      label: "Name As Per Aadhar",
      required: true,
    },
    {
      id: 3,
      name: "dob",
      type: "text",
      placeholder: "dob",
      label: "DOB as per Aadhar",
      required: true,
    },
    {
      id: 4,
      name: "otherDetailsIfAny",
      type: "text",
      placeholder: "otherDetailsIfAny",
      label: "Other Details If Any",
    },
    // Financial Details 
    {
      id: 5,
      name: "bankName",
      type: "text",
      placeholder: "bankName",
      label: "Bank Name",
    },
    {
      id: 6,
      name: "bankBranch",
      type: "text",
      placeholder: "bankBranch",
      label: "Bank Branch",
    },
    {
      id: 7,
      name: "accountNumber",
      type: "text",
      placeholder: "accountNumber",
      label: "Account Number",
    },
    {
      id: 8,
      name: "ifscCode",
      type: "text",
      placeholder: "ifscCode",
      label: "IFSC Code",
    },
    // Todo: Daily Wages Monthly Salary 
    {
      id: 9,
      name: "calculation",
      type: "text",
      placeholder: "calculation",
      label: "Date Of Leaving ( if Exit )",
    },
    // Salary / Compliance Details
    {
      id: 10,
      name: "epfMemberId",
      type: "text",
      placeholder: "epfMemberId",
      label: "EPF Member ID",
    },
    {
      id: 11,
      name: "uanNumber",
      type: "text",
      placeholder: "uanNumber",
      label: "UAN Number",
    },
    {
      id: 12,
      name: "esicIpNumber",
      type: "text",
      placeholder: "esicIpNumber",
      label: "Esic Ip Number",
    },
    {
      id: 13,
      name: "bonusApplicable",
      type: "text",
      placeholder: "bonusApplicable",
      label: "Bonus Applicable",
    },
    {
      id: 15,
      name: "gratuityApplicable",
      type: "text",
      placeholder: "gratuityApplicable",
      label: "Gratuity Applicable",
    },
    {
      id: 16,
      name: "nomineeName",
      type: "checkbox",
      placeholder: "nomineeName",
      label: "Nominee Name",
    },
    {
      id: 17,
      name: "relationshipWithMember",
      type: "date",
      placeholder: "relationshipWithMember",
      label: "Relationship With Member",
    },
    {
      id: 19,
      name: "familyParticular",
      type: "text",
      placeholder: "familyParticular",
      label: "Family Particular",
    },
    
  ];

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
          <form onSubmit={handleSubmit} className="">
              <div className="flex flex-wrap justify-between ">
                {inputs.map((input) => (
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

export default Salary;

;

