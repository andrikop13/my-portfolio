import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { useState } from "react";
import Wrapper from "../Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";

const ProjectForm = () => {
  const [tools, setTools] = useState({ data: [""] });

  const onAddTool = () => {
    tools.data.length < 6 &&
      setTools((prevState) => ({
        data: [...prevState.data, ""],
      }));
  };

  const onRemoveTool = (index) => {
    setTools((prevState) => ({
      data: prevState.data.filter((t, i) => i !== index),
    }));
  };

  const changeValue = (e, index) => {
    const toolsBack = [...tools.data];
    toolsBack[index] = e.target.value;

    setTools((prevState) => ({
      data: toolsBack,
    }));
  };

  return (
    <Wrapper>
      <Paper
        className="paper-container"
        sx={{ borderRadius: 1, padding: "3rem" }}
      >
        <h3>Basic Information</h3>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <FormControl variant="outlined" required fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Project Title
              </InputLabel>
              <OutlinedInput label="Project Title" />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="outlined" required fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Project Subtitles
              </InputLabel>
              <OutlinedInput label="Project Subtitle" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" required fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Project Description
              </InputLabel>
              <OutlinedInput
                fullWidth={true}
                multiline
                rows={2}
                label="Project Description"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{ padding: "25px 40px 5px 40px" }}>
            <h3 style={{ margin: "0" }}>Technologies Used</h3>
          </Grid>

          <Grid item xs={12} style={{ padding: "10px 40px 0px 40px" }}>
            <button className="add-button" onClick={onAddTool}>
              +
            </button>
            <span>
              {" "}
              <h5 style={{ display: "inline-block" }}>(max: 6)</h5>
            </span>
          </Grid>

          {tools.data.map((tool, index) => (
            <Grid
              key={`index_${index}`}
              item
              xs={parseInt(2)}
              style={{ paddingTop: "10px" }}
            >
              <FormControl variant="outlined" fullWidth={true}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tool {index + 1}
                </InputLabel>
                <OutlinedInput
                  label="Project tools"
                  value={tool}
                  onChange={(event) => changeValue(event, index)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ marginLeft: "15px" }}
                        aria-label="edit"
                        onClick={onRemoveTool.bind(null, index)}
                      >
                        <DeleteIcon sx={{ fontSize: "2rem" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                ></OutlinedInput>
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Wrapper>
  );
};

export default ProjectForm;
