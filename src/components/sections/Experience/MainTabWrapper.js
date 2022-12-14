import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loaders";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "@components/sections";
import { responsive } from "@config";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MainTabWrapper = () => {
  const [value, setValue] = React.useState(0);
  const [isMobile, setIsMobile] = useState(null);
  let jobs = useSelector((state) => state.jobs.list);

  const handleResize = () => {
    const w = window.innerWidth / responsive.baseDivider;
    setIsMobile(w < 75);
  };

  useEffect(() => {
    const width = window.innerWidth / responsive.baseDivider;
    setIsMobile(width < 75);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {!jobs.length && (
        <div className="loader-container">
          <Loader type="ball-grid-pulse" />
        </div>
      )}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "transparent",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}
          textColor="secondary"
        >
          {jobs.map((job, i) => (
            <Tab
              label={job.organization}
              {...a11yProps(i)}
              value={i}
              key={`jobtab_${job.id}`}
            />
          ))}
        </Tabs>
        {jobs.map((job, i) => (
          <TabPanel value={value} index={i} key={`jobpanel_${i}`}>
            <div className="experience__description">
              <h1 className="experience__description-title">
                <label className="experience__position">{job.position}</label>{" "}
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  @{job.organization}
                </a>
              </h1>
              <h4 className="experience__description-date">{job.date}</h4>
              <div className="experience__description-text">
                <ul>
                  {job.descriptionItems.map((d, di) => (
                    <li key={"ejobs" + i + di}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export default MainTabWrapper;
