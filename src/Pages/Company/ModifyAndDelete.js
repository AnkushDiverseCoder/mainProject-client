import React from "react";
import { ModifyInput } from "../../components/Utility/InputElements/CompanyInput";
import FormInput from "../../components/Utility/FormInput";
import { ToastContainer, toast } from "react-toastify";
import newRequest from "../../utils/newRequest";
import { modifyNullValues } from "./ApiCalls";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";

const ModifyAndDelete = () => {
  const [companyName, setCompanyName] = React.useState(null);
  const [workPlaceName, setWorkPlaceName] = React.useState(null);
  const [companyId, setCompanyId] = React.useState(null);
  const [companyNameInput, setCompanyNameInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [values, setValues] = React.useState({
    ...modifyNullValues,
  });

  //  get CompanyName
  React.useEffect(() => {
    const getData = async () => {
      const companyNameData = await newRequest.get("/company/getName");
      setCompanyName(companyNameData.data.msg);
    };
    getData();
  }, []);

  //  get WorkPlaceName
  const handleWorkPlaceName = async (e) => {
    e.preventDefault();
    const workPlaceNameData = await newRequest.post(
      "/company/getWorkPlaceName",
      { companyName: companyNameInput }
    );
    setWorkPlaceName(workPlaceNameData.data.msg);
    setOpen(true);
  };

  //  get Submit Functions
  const handleGetData = async (e) => {
    e.preventDefault();
    setLoading(true)
    const companyId = await newRequest.post("/company/modifyData", {
      companyName: companyNameInput,
      workPlaceName: values.workPlaceName,
    });
    setValues({
      companyAddress: companyId?.data?.msg?.companyAddress,
      state: companyId?.data?.msg?.state,
      district: companyId?.data?.msg?.district,
      authorizedPersonName: companyId?.data?.msg?.authorizedPersonName,
      authorizedContactNumber: companyId?.data?.msg?.authorizedContactNumber,
      companyEmailId: companyId?.data?.msg?.companyEmailId,
      panNumber: companyId?.data?.msg?.panNumber,
      epfCodeNumber: companyId?.data?.msg?.epfCodeNumber,
      gstNumber: companyId?.data?.msg?.gstNumber,
      esicCodeNumber: companyId?.data?.msg?.esicCodeNumber,
      professionalTax: companyId?.data?.msg?.professionalTax,
      tanNumber: companyId?.data?.msg?.tanNumber,
      workPlaceName: companyId?.data?.msg?.workPlaceName,
      serviceProvide: companyId?.data?.msg?.serviceProvide,
      dateOfCommencement: moment(
        companyId?.data?.msg?.dateOfCommencement
      ).format("YYYY-MM-DD"),
      professionalFees: companyId?.data?.msg?.professionalFees,
      licenceNumber: companyId?.data?.msg?.licenceNumber,
      officeName: companyId?.data?.msg?.officeName,
      epfRegionalName: companyId?.data?.msg?.epfRegionalName,
      esicRegionalName: companyId?.data?.msg?.esicRegionalName,
      natureOfBusiness: companyId?.data?.msg?.natureOfBusiness,
    });
    setCompanyId(companyId?.data?.msg?._id);
    setOpen(false);
    setLoading(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { data } = await newRequest.put(`/company/update/${companyId}`, {
      ...values,
    });
    if (data.status === false) {
      toast.error(data.msg, toastOptions);
      setLoading(false)
    }
    if (data.status === true) {
      toast.success(data.msg, toastOptions);
      setLoading(false)
      setValues({ ...modifyNullValues });
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
          <form>
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <div className="flex items-center">
                  <div className="flex ">
                    <div className="flex flex-col">
                      <h1 className="font-bold mb-2">Company Name</h1>
                      <select
                        value={companyNameInput}
                        onChange={(e) => setCompanyNameInput(e.target.value)}
                        className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                      >
                        <option
                          name="workPlaceName"
                          className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                        >
                          Select Company Name
                        </option>
                        {companyName?.map((items, index) => (
                          <option
                            name="companyName"
                            key={index}
                            value={items._id}
                            className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                          >
                            {items._id}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleWorkPlaceName}
                      className="inline-flex mt-8 items-center justify-center px-5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-4 ml-2"
                    >
                      Get Work Place Name
                    </button>
                  </div>
                  {workPlaceName && open && (
                    <div className="mr-3">
                      <h1 className="font-bold mb-2">Work Place Name</h1>
                      <select
                        value={values.workPlaceName}
                        onChange={(e) => {
                          setValues({
                            ...values,
                            workPlaceName: e.target.value,
                          });
                          console.log(companyNameInput);
                        }}
                        className="h-10 border mt-1 rounded px-4 w- bg-slate-300 mb"
                      >
                        <option
                          name="workPlaceName"
                          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                          Select Work Place Name
                        </option>
                        {workPlaceName?.map((items, index) => (
                          <option
                            name="workPlaceName"
                            key={index}
                            value={items._id}
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                          >
                            {items._id}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {loading ? (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <button
                      onClick={handleGetData}
                      className="inline-flex mt-10 mb-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <form className="flex flex-wrap justify-between items-center">
            {ModifyInput.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
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
            
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <button
              type="submit"
              className="bg-red-300 p-4 rounded-lg font-bold"
              onClick={handleSubmit}
            >
              Save
            </button>
            )}
            
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

export default ModifyAndDelete;
