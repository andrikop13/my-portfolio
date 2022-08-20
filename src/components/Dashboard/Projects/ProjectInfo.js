import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const fontSize = { fontSize: "var(--fonts-mui-size)" };

const ProjectInfo = ({
  tools,
  setTools,
  title,
  titleChange,
  titleIsValid,
  subtitle,
  subtitleChange,
  subtitleIsValid,
  description,
  descriptionChange,
  descriptionIsValid,
  link,
  linkChange,
  linkIsValid,
  github,
  githubChange,
  gitIsValid,
}) => {
  const navigate = useNavigate();
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

  const changeToolValue = (e, index) => {
    const toolsBack = [...tools.data];
    toolsBack[index] = e.target.value;

    setTools((prevState) => ({
      data: toolsBack,
    }));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <h3>Basic Information</h3>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <button
              type="button"
              className="small-button"
              style={{
                margin: "0.5rem 0 0 0",
                border: "1px solid var(--navy)",
                color: "var(--navy)",
                backgroundColor: "var(--green-tint)",
              }}
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={5} style={{ padding: "25px 40px 5px 40px" }}>
        <Grid item md={3}>
          <FormControl variant="outlined" required fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Project Title
            </InputLabel>
            <OutlinedInput
              label="Project Title"
              value={title}
              onChange={titleChange}
              error={!titleIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <Grid item md={3}>
          <FormControl variant="outlined" required fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Project Subtitle
            </InputLabel>
            <OutlinedInput
              label="Project Subtitle"
              value={subtitle}
              onChange={subtitleChange}
              error={!subtitleIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <Grid item md={3}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Project Link
            </InputLabel>
            <OutlinedInput
              label="Project Link"
              value={link}
              onChange={linkChange}
              error={!linkIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <Grid item md={3}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Github Link
            </InputLabel>
            <OutlinedInput
              label="Github link"
              value={github}
              onChange={githubChange}
              error={!gitIsValid}
              sx={fontSize}
            />
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
              value={description}
              onChange={descriptionChange}
              error={!descriptionIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <br />
        <br />
        <Grid item xs={12} style={{ padding: "45px 40px 5px 0px" }}>
          <h3>Technologies Used</h3>
        </Grid>

        <Grid item xs={12} style={{ padding: "25px 40px 5px 40px" }}>
          <button className="add-button" type="button" onClick={onAddTool}>
            +
          </button>
          <span>
            {" "}
            <h5 style={{ display: "inline-block" }}>(max: 6)</h5>
          </span>
        </Grid>

        {tools.data.map((tool, index) => (
          <Grid key={`index_${index}`} item style={{ paddingTop: "20px" }}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Tool {index + 1}
              </InputLabel>
              <OutlinedInput
                label="Project tools"
                value={tool}
                onChange={(event) => changeToolValue(event, index)}
                sx={fontSize}
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
    </>
  );
};

export default ProjectInfo;
