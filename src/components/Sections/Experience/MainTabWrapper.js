import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import TabPanel from "./TabPanel";
import experience from "../../../content/content";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MainTabWrapper = () => {
  const [value, setValue] = React.useState(0);
  const jobs = experience.jobs;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}
        textColor="secondary"
      >
        {jobs.map((job, i) => (
          <Tab label={job.organization} {...a11yProps(i)} />
        ))}
      </Tabs>
      {jobs.map((job, i) => (
        <TabPanel value={value} index={i}>
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
                {job.descriptionItems.map((d) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
};

export default MainTabWrapper;
