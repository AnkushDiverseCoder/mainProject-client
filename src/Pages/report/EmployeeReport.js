import React from "react";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";
import EmployeeReportTable from "../../components/Report/EmployeeReportTable";

const EmployeeReport = () => {
  const [companyName, setCompanyName] = React.useState(null);
  const [workPlaceName, setWorkPlaceName] = React.useState(null);
  const [companyNameInput, setCompanyNameInput] = React.useState("");
  const [workPlaceNameInput, setWorkPlaceNameInput] = React.useState("");
  const [data, setData] = React.useState(null);

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
    handleCompanyNameChange();
    const workPlaceNameData = await newRequest.post(
      "/company/getWorkPlaceName",
      { companyName: companyNameInput }
    );
    setWorkPlaceName(workPlaceNameData.data.msg);
  };

  //  get Submit Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {data} = await newRequest.post("/employee/getAll", {
      companyName: companyNameInput,
      workPlaceName: workPlaceNameInput,
    });
    setData(data.msg)
  }

  const handleCompanyNameChange = async (e) => {
    setCompanyNameInput(e.target.value);
  };

  const handleWorkPlaceNameChange = async (e) => {
    setWorkPlaceNameInput(e?.target?.value);
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        /> */}
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p class="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex ">
          <div>
            <h1 className="font-bold mb-2">Company</h1>
            <select
              value={companyNameInput}
              onChange={handleCompanyNameChange}
              className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <option
                name="workPlaceName"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Select Company Name
              </option>
              {companyName?.map((items, index) => (
                <option
                  name="companyName"
                  key={index}
                  value={items._id}
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
        {workPlaceName && (
          <div>
            <h1 className="font-bold mb-2">Work Place Name</h1>
            <select
              value={workPlaceNameInput}
              onChange={handleWorkPlaceNameChange}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
      </div>
      <div className="flex justify-center w-full">
        <button
           
          className="mt-5 px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          CsvFile
        </button>
        <button
          onClick={handleSubmit}
          className="mt-5 px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Submit
        </button>
      </div>
      <div className="w-full flex justify-center">
        <EmployeeReportTable data={data} />
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

export default EmployeeReport;
