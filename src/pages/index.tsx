import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "components/user-card";
import BannerComponent from "components/BannerComponent/BannerComponent";
import ProductList from "components/ProductListComponent/ProductList";
import DoctorList from "components/ListDoctorComponent/DoctorList";
import ProductReviewComponent from "components/ReviewCardComponent/ProductReviewComponent";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <BannerComponent />
      <ProductList />
      <DoctorList />
      <ProductReviewComponent />
    </Page>
  );
};

export default HomePage;
