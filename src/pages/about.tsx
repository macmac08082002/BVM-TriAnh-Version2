import GetToken from "components/DisplayNumber/DisplayNumber";
import ProifileComponent from "components/ProfileComponent/ProfileComponent";
import React from "react";
import { Sheet, Button, Page, Text, useNavigate } from "zmp-ui";

const AboutPage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="h-[80%]">
      <Page className="page">
        <ProifileComponent />
      </Page>
    </div>
  );
};

export default AboutPage;
