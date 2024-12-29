import React from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import ManagementSection from "../../components/ManagementSection/ManagementSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import RecruitmentSection from "../../components/RecruitmentSection/RecruitmentSection";

function Home() {
  return (
    <div>
      <MainBanner />
      <ManagementSection />
      <ProjectsSection />
      <RecruitmentSection />
    </div>
  );
}

export default Home;
