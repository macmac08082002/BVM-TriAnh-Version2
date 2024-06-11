import React from "react";
import { Button, Input, Box, Page, useSnackbar } from "zmp-ui";

import ImportForm from "components/BookingComponent/BookingComponent";
import { ToastContainer } from "react-toastify";
import GetToken from "components/DisplayNumber/DisplayNumber";

const FormPage: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ImportForm />
      <ToastContainer />
      <GetToken />
    </div>
  );
};

export default FormPage;
