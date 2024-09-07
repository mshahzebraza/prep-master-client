import React from "react";
import PageHeader from "src/client/pages/Header.page";
import LandingPage from "src/client/pages/LandingPage";

const LandingPageView: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <LandingPage />
    </div>
  );
};

export default LandingPageView;
