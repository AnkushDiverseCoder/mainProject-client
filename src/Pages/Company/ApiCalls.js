import newRequest from "../../utils/newRequest";

export const nullValues = {
  companyName: "",
  companyAddress: "",
  state: "",
  district: "",
  authorizedPersonName: "",
  authorizedContactNumber: "",
  companyEmailId: "",
  panNumber: "",
  gstNumber: "",
  epfCodeNumber: "",
  esicCodeNumber: "",
  professionalTax: "",
  tanNumber: "",
  workPlaceName: "",
  serviceProvide: "With Register",
  dateOfCommencement: "",
  licenceNumber: "",
  epfRegionalName: "",
  esicRegionalName: "",
  natureOfBusiness: "",
  professionalFees: "",
};

export const addCompanyApi = async (values)=>{
    await newRequest.post("/company/add", {
        ...values
      });
}