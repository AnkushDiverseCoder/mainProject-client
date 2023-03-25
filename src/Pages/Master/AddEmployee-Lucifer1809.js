import React from "react";
import FormInput from "../../components/Utility/FormInput";
import { inputs, nullValues } from "./Input";
import AdditionalDetails from "./AdditionalDetails";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";
import FormData from "form-data"

const AddEmployee = () => {
  const [values, setValues] = React.useState({
    ...nullValues,
  });
  const [file, setFile] = React.useState();

  const [familyParticular, setFamilyParticular] = React.useState([
    { name: "", dob: "", relationship: "" },
    { name: "", dob: "", relationship: "" },
  ]);

  const handleAddPlayers = () => {
    const values = [...familyParticular];
    values.push({
      name: "",
      dob: "",
      relationship: "",
    });
    setFamilyParticular(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...familyParticular];
    values.splice(index, 1);
    setFamilyParticular(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...familyParticular];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setFamilyParticular(values);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setValues({ ...nullValues });
  };

  const handleUploadExcel = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };
  const submit= async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("csvFile",file)
    const res = await newRequest.post("/user/uploadEmployeeData", formData);
   if (res.data.status === false) {
     toast.error(res.data.msg, toastOptions);
   }
   if (res.data.status === true) {
     toast.success(res.data.msg, toastOptions);
     setFile(null)
   }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    <>
      <section className=" w-full p-6 flex items-center justify-center ">
        <div className="flex justify-center h-full">
          <img src="/addMaster.jpg" alt="" className="mr-10 w-80" />
        </div>
        <div className="w-full h-full p-6 flex-1 rounded-lg">
          <div>
            <h2 className="font-semibold text-xl ">Responsive Form</h2>
            <p className=" mb-6 ml-3 italic">
              Form is mobile responsive. Give it a try.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 ">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>

          <div className="bg-[#f8f6c1]-500 p-4 rounded-xl mb-2">
            <h1 className="mr-4 font-bold flex justify-center mb-2 text-sm">
              Family Particular
            </h1>
            {familyParticular.length > 0 && (
              <>
                {familyParticular.map((field, index) => (
                  <div
                    className="add-player-div flex items-center w-full justify-center"
                    key={index}
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 bg-[#f8f6c1] mr-4"
                        name="name"
                        placeholder="Enter Name"
                        value={field.name}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>
                    <div className="mb-3 mr-3">
                      <input
                        type="date"
                        name="dob"
                        className="h-10 border mt-1 rounded px-4 bg-[#f8f6c1] text-slate-400 "
                        placeholder="Enter Date Of Birth"
                        value={field.dob}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="h-10 border mt-1 rounded px-4 bg-[#f8f6c1] "
                        name="relationship"
                        placeholder="Enter Relationship"
                        value={field.relationship}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>

                    <div>
                      <button
                        className="bg-red-600 p-2 rounded-lg text-white font-bold ml-4"
                        onClick={() => handleRemovePlayers(index)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            <div className="flex justify-center">
              <button
                className="bg-green-300 p-4 rounded-lg font-bold mb-2 "
                onClick={() => handleAddPlayers()}
              >
                Add Player
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <input type="file" accept={".csv"} name="csvFile" id="upload-photo" onChange={handleUploadExcel} />
            <div>
              <button
                className="bg-red-400  ml-3  text-white  p-4  rounded-lg font-bold text-lg"
                onClick={submit}
              >
                submit
              </button>
            </div>
            <div>
              <button
                className="bg-red-400  ml-3  text-white  p-4  rounded-lg font-bold text-lg"
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </section>
      <AdditionalDetails
        firstInputValue={values}
        familyParticular={familyParticular}
      />
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
    </>
  );
};

export default AddEmployee;
