import React from "react";
import LandingPage from "src/client/pages/LandingPage";
import Footer from "src/client/pages/footer.pages";
import PageHeader from "src/client/pages/Header.page";

const LandingPageView: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <LandingPage />
    </div>
  );
};

export default LandingPageView;
