import Cookies from "js-cookie";
import React from "react"
import newRequest from "../../utils/newRequest";

const EmployeeReport = () => {
  const [employeeNames, setEmployeeNames] = React.useState(null);
  const [employeeNamesInput, setEmployeeNamesInput] = React.useState(null);

  React.useEffect(() => {
    const getEmployeeNames = async () => {
      const Names = await newRequest.post("/employee/getNames", {
        companyName: Cookies.get("companyName"),
        workPlaceName: Cookies.get("workPlaceName")
      })
      console.log(Names.data)
      setEmployeeNames(Names.data.msg)
    };
    getEmployeeNames()
  }, [])

  const handleCompanyNameChange = async (e) => {
    setEmployeeNamesInput(e.target.value);
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
          <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
          <div class="flex justify-center">
            <div>
              <h1 className="font-bold mb-2">Employee Report</h1>
              <select
                value={employeeNamesInput}
                onChange={handleCompanyNameChange}
                className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <option
                  name="workPlaceName"
                  value=""
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Select Employee Name
                </option>
                {employeeNames?.map((items) => (
                  <option
                    name="companyName"
                    key={items._id.id}
                    value={items._id.employeeName}
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    {items._id.employeeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeReport