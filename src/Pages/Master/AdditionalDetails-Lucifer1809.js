import React from "react";
import { ToastContainer, toast } from "react-toastify";
import newRequest from "../../utils/newRequest";
import {
  additionalNullValues,
  financialInputs,
  KycInputs,
  nullValues,
  salaryInputs,
} from "./Input";
import FormInput from "../../components/Utility/FormInput";
import Cookies from "js-cookie";

const AdditionalDetails = ({ firstInputValue, familyParticular }) => {
  const [values, setValues] = React.useState({
    ...additionalNullValues,
  });

  const [wagesRate, setWagesRate] = React.useState([
    { heads: "", rates: "", define: "" },
  ]);

  const handleAddPlayers = () => {
    const values = [...wagesRate];
    values.push({
      heads: "",
      price: "",
      define: "",
    });
    setWagesRate(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...wagesRate];
    values.splice(index, 1);
    setWagesRate(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...wagesRate];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setWagesRate(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Company Add Api Callback
    const res = await newRequest.post("/employee/add", {
      companyName: Cookies.get("companyName"),
      workPlaceName: Cookies.get("workPlaceName"),
      ...firstInputValue,
      familyParticular,
      ...values.kycDetails,
      ...values.financialDetails,
      wagesRate,
      ...values.salaryDetails,
    });
    if (res.data.status === false) {
      toast.error(res.data.msg, toastOptions);
    }
    if (res.data.status === true) {
      toast.success(res.data.msg, toastOptions);
      setValues({
        ...additionalNullValues,
        firstInputValue: { ...nullValues },
      });
    }
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setValues(...additionalNullValues);
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
    <section className=" w-full p-10 bg-[#35c4af] flex items-center justify-start ">
      <div className="w-full h-full bg-white rounded-xl p-6">
        <div>
          <h2 className="font-bold text-xl  ">Responsive Form</h2>
          <p className=" mb-6 ml-3 italic">
            Form is mobile responsive. Give it a try.
          </p>
        </div>

        {/* Kyc Details  */}
        <div className="flex justify-around  rounded-lg p-4 border-teal-400 items-center ">
          <div className="flex-col bg-white w-[33%] p-8 rounded-lg mb-auto">
            <h2 className="font-bold text-2xl mb-2 underline">
              Kyc Details :-
            </h2>
            <form className="ml-6">
              {KycInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values.kycDetails[input.name]}
                  onChange={(e) => {
                    let temp = { ...values };
                    temp.kycDetails[e.target.name] = e.target.value;
                    setValues(temp);
                  }}
                />
              ))}
            </form>
          </div>

          {/* Financial Details  */}
          <div className="flex-col w-[33%] p-8 ">
            <h2 className="font-bold text-2xl mb-2 underline">
              Financial Details :-
            </h2>
            <div className="ml-6">
              {financialInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values.financialDetails[input.name]}
                  onChange={(e) => {
                    let temp = { ...values };
                    temp.financialDetails[e.target.name] = e.target.value;
                    setValues(temp);
                  }}
                />
              ))}
              <div className="formInput mb-6 flex flex-col ">
                <label className="font-bold">Define Rest</label>
                <select
                  value={values.financialDetails.rest}
                  onChange={(e) => {
                    let temp = { ...values };
                    temp.financialDetails.rest = e.target.value;
                    setValues(temp);
                  }}
                  className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                >
                  <option value="">Select Any Rest </option>
                  <option value="everySunday">Every Sunday</option>
                  <option value="rotationBasic">Rotation Basic</option>
                </select>
              </div>
              <div className="formInput mb-6 flex flex-col ">
                <label className="font-bold">Calculation</label>
                <select
                  value={values.financialDetails.calculation}
                  onChange={(e) => {
                    let temp = { ...values };
                    temp.financialDetails.calculation = e.target.value;
                    setValues(temp);
                  }}
                  className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                >
                  <option value="">Select Any Calculation</option>
                  <option value="dailyWages">Daily Wages</option>
                  <option value="monthlySalary">Monthly Salary</option>
                </select>
              </div>

              {/* Todo  */}
              {/* Daily Wages Basic and Vda field Number and beside reflect Total and Both Compulsory   */}
              {/* Monthly Wages Basic and */}

              <div className="bg-[#f8f6c1]-500 p-4 rounded-xl mb-2">
                <h1 className="mr-4 font-bold flex justify-center mb-2 text-sm">
                  Define Wages Rate
                </h1>
                {wagesRate.length > 0 && (
                  <>
                    {wagesRate.map((field, index) => (
                      <div
                        className="add-player-div flex items-center w-full justify-center "
                        key={index}
                      >
                        <div className="formInput mb-6 flex flex-col mr-3 mt-3">
                          <select
                            value={field.heads}
                            name="heads"
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                            className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                          >
                            <option value="">Select Head</option>
                            <option value="Daily Wages">Daily Wages</option>
                            <option value="Monthly Salary">
                              {" "}
                              Monthly Salary{" "}
                            </option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <input
                            type="number"
                            name="rates"
                            className="h-10 border mt-1 rounded px-4 bg-[#f8f6c1] "
                            placeholder="Enter rates"
                            value={field.rates}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </div>
                        <div className="formInput mb-6 flex flex-col ml-3 mt-3">
                          <select
                            value={field.define}
                            name="define"
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                            className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                          >
                            <option value="">Select Type</option>
                            <option value="both">Both</option>
                            <option value="epf">EPF</option>
                            <option value="esi">ESI</option>
                            <option value="na">Na</option>
                          </select>
                        </div>

                        <div>
                          <button
                            className="bg-red-600 p-2 rounded-lg text-white font-bold ml-4 mb-2"
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
            </div>
          </div>

          {/* Salary/Compliance Details */}
          <div className="flex-col w-[33%] rounded-lg mb-auto mt-8">
            <h2 className="font-bold text-2xl mb-2 underline">
              Salary/Compliance Form :-
            </h2>
            <form className="ml-6">
              {salaryInputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values.salaryDetails[input.name]}
                  onChange={(e) => {
                    let temp = { ...values };
                    temp.salaryDetails[e.target.name] = e.target.value;
                    setValues(temp);
                  }}
                />
              ))}
            </form>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            onClick={handleSubmit}
            className=" p-4 text-white font-bold text-lg bg-teal-500 mr-4 rounded-lg"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className=" p-4 text-white font-bold text-lg bg-red-400 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
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

export default AdditionalDetails;
