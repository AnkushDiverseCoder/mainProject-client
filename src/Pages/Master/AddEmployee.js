import React from "react";
import FormInput from "../../components/Utility/FormInput";
import { inputs, nullValues } from "./Input";
import AdditionalDetails from "./AdditionalDetails";

const AddEmployee = () => {

  const [values, setValues] = React.useState({
    ...nullValues,
  });

  const [familyParticular, setFamilyParticular] = React.useState([
    { name: "", dob: "", relationship: "" },
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

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
              <button
                className="bg-red-400  ml-3 text-white w-[15%] p-4  rounded-lg font-bold text-lg"
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
        </div>
      </section>
      <AdditionalDetails firstInputValue={values} familyParticular={familyParticular}/>
    </>
  );
};

export default AddEmployee;
