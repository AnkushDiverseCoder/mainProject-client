import Cookies from "js-cookie";
import React from "react";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";
import CompanyReportTable from "../../components/Report/CompanyReportTable";

const CompanyReport = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getEmployeeNames = async () => {
      try {
        const { data } = await newRequest.post("/company/getData", {
          companyName: Cookies.get("companyName"),
          workPlaceName: Cookies.get("workPlaceName"),
        });
        setData(data.msg);
      } catch (error) {
        toast.error(error.response.data.msg, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    };
    getEmployeeNames();
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
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
      <div className="w-full flex justify-center">
        <CompanyReportTable data={data} />
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

export default CompanyReport;
