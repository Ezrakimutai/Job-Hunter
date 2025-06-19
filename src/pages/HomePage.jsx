import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero 
      title="Job hunting made simple" 
      subtitle="Discover tailored job listings and streamline your job search with our intuitive platform, Join us and take the next step in your career journey today."/>
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
