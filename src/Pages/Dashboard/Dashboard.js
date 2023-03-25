import React from "react";
import newRequest from "../../utils/newRequest";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [companyName, setCompanyName] = React.useState(null);
  const [workPlaceName, setWorkPlaceName] = React.useState(null);
  const [companyNameInput, setCompanyNameInput] = React.useState("");
  const [workPlaceNameInput, setWorkPlaceNameInput] = React.useState("");

  const navigate = useNavigate();
  React.useEffect(() => {
    const verifyUser = async () => {
      const { data } = await newRequest.post("/auth/verify", {
        token: Cookies.get("token"),
      });

      if (data.status === "false") {
        navigate("/login");
      }
    };
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

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
    workPlaceNameInput(workPlaceNameData.data.msg[0]._id);
  };

  //  get Submit Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyId = await newRequest.post("/company/Id", {
      companyName: companyNameInput,
      workPlaceName: workPlaceNameInput,
    });
    Cookies.set("companyId", companyId.data.msg);
    Cookies.set("companyName", companyId.data.companyName);
    Cookies.set("workPlaceName", companyId.data.workPlaceName).then(
      navigate("/company/add")
    );
  };

  const handleCompanyNameChange = async (e) => {
    setCompanyNameInput(e.target.value);
  };

  const handleWorkPlaceNameChange = async (e) => {
    setWorkPlaceNameInput(e.target.value);
  };

  return (
    <>
      <section className="bg-[#FFFCEB] dark:bg-gray-900 shadow-2xl ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use FlowBite to simplify their payment stack.
            </p>
            <div className="flex items-center">
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
            <button
              onClick={handleSubmit}
              className="inline-flex mt-5 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Submit
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
