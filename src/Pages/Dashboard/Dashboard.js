import React from "react";
import newRequest from "../../utils/newRequest";

const Dashboard = () => {
  const [companyName, setCompanyName] = React.useState();
  const [workPlaceName, setWorkPlaceName] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState({
     companyName:"",
     workPlaceName:"",
  })

  React.useEffect(() => {
    const getData = async () => {
      const workPlaceNameData = await newRequest.get("/company/getName");
      const companyNameData = await newRequest.get("/company/getWorkPlaceName");
      
      setCompanyName(companyNameData.data.msg);
      setWorkPlaceName(workPlaceNameData.data.msg);
    };
    getData();
  }, []);
  
  const handleSubmit =  async (e)=>{
    e.preventDefault();
    const companyId = await newRequest.post("/company/Id",{companyName,workPlaceName});
    console.log(companyId);
      
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <div className="flex">
              <div>
                <h1 className="font-bold mb-2">Company</h1>
                <select className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-4">
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
              <div>
                <h1 className="font-bold mb-2">Work Place Name</h1>
                <select className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
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
            </div>
              <button onClick={handleSubmit} className="inline-flex mt-5 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit</button>
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
