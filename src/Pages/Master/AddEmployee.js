import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FormInput from "./FormInput.js";

const AddEmployee = () => {
  const [values, setValues] = React.useState({
    employeeName: "",
    fatherName: "",
    dob: "",
    gender: "",
    maritalStatus:"",
    dateOfJoining: "",
    designation: "",
    department: "",
    dateOfLeaving: "",
    address: "",
    contact: "",
    email: "",
    panNumber: "",
    uidAadharNumber: "",
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
      name: "employeeName",
      type: "text",
      placeholder: "employeeName",
      label: "Employee Name",
      required: true,
    },
    {
      id: 2,
      name: "fatherName",
      type: "text",
      placeholder: "fatherName",
      label: "Father Name",
      required: true,
    },
    {
      id: 3,
      name: "dob",
      type: "text",
      placeholder: "dob",
      label: "DOB",
      required: true,
    },
    {
      id: 4,
      name: "gender",
      type: "text",
      placeholder: "gender",
      label: "Gender",
    },
    {
      id: 5,
      name: "maritalStatus",
      type: "text",
      placeholder: "maritalStatus",
      label: "Marital Status",
    },
    {
      id: 6,
      name: "dateOfJoining",
      type: "text",
      placeholder: "dateOfJoining",
      label: "Date Of Joining",
    },
    {
      id: 7,
      name: "designation",
      type: "text",
      placeholder: "designation",
      label: "Designation",
    },
    {
      id: 8,
      name: "department",
      type: "text",
      placeholder: "department",
      label: "Department",
    },
    {
      id: 9,
      name: "dateOfLeaving",
      type: "text",
      placeholder: "dateOfLeaving",
      label: "Date Of Leaving ( if Exit )",
    },
    {
      id: 10,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "Address",
    },
    {
      id: 11,
      name: "contact",
      type: "text",
      placeholder: "contact",
      label: "Contact",
    },
    {
      id: 12,
      name: "email",
      type: "text",
      placeholder: "email",
      label: "Email",
    },
    {
      id: 13,
      name: "panNumber",
      type: "text",
      placeholder: "panNumber",
      label: "PAN Number",
    },
    {
      id: 15,
      name: "uidAadharNumber",
      type: "text",
      placeholder: "uidAadharNumber",
      label: "UID / Aadhar Number",
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

export default AddEmployee;

;

