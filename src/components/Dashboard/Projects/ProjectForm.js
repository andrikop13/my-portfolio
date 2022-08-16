import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import useInput from "../../../hooks/use-input";
import DropZone from "./DropZone";
import ConfirmationBox from "../../Sections/Contact/confirmationBox";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fileToBase64 } from "../../../utils";
import { addProject } from "../../../store/projects/projects-actions";

const isNotEmpty = (value) => String(value).toLowerCase() !== "";
const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false || urlString === "";
  }
};

const ProjectForm = () => {
  const [tools, setTools] = useState({ data: [""] });
  const [dialog, setDialog] = useState(false);
  const [images, setFiles] = useState([]);
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects.list);
  const { projectId } = useParams();
  const currentProject = projectId
    ? projects.find((pr) => pr.id === projectId)
    : null;

  useEffect(() => {
    if (currentProject) {
      setTools({ data: currentProject.technologies_used });
    }
  }, [currentProject]);

  const {
    value: titleValue,
    isValid: titleIsValid,
    valueChangeHandler: titleChangeHandler,
  } = useInput(isNotEmpty, currentProject ? currentProject.title : "");

  const {
    value: subtitleValue,
    isValid: subtitleIsValid,
    valueChangeHandler: subtitleChangeHandler,
  } = useInput(isNotEmpty, currentProject ? currentProject.subtitle : "");

  const {
    value: linkValue,
    isValid: linkIsValid,
    valueChangeHandler: linkChangeHandler,
  } = useInput(isValidUrl, currentProject ? currentProject.link : "");

  const {
    value: gitValue,
    isValid: gitIsValid,
    valueChangeHandler: gitChangeHandler,
  } = useInput(isValidUrl, currentProject ? currentProject.github : "");

  const {
    value: descValue,
    isValid: descIsValid,
    valueChangeHandler: descChangeHandler,
  } = useInput(isNotEmpty, currentProject ? currentProject.description : "");

  // Check if form is valid
  let formIsValid =
    titleIsValid && subtitleIsValid && descIsValid && linkIsValid && gitIsValid;

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

  const submitProject = (e) => {
    e.preventDefault();
    setDialog(true);
  };

  const saveProject = async () => {
    const base64Images = [];
    const send = () => {
      dispatch(
        addProject({
          title: titleValue,
          subtitle: subtitleValue,
          description: descValue,
          images: base64Images,
          technologies_used: tools,
          link: linkValue,
          github: gitValue,
        })
      );
    };

    images.forEach(async (file, index) => {
      const result = await fileToBase64(file);
      base64Images.push(result);

      images.length && index === images.length - 1 && send();
    });

    !images.length && send();
  };

  return (
    <Wrapper>
      <Paper className="paper-container">
        <form onSubmit={submitProject}>
          <Paper
            className="paper-container"
            sx={{ borderRadius: 1, padding: "1rem 1rem 2rem 2rem" }}
          >
            <h3>Basic Information</h3>
            <Grid
              container
              spacing={5}
              style={{ padding: "25px 40px 5px 40px" }}
            >
              <Grid item xs={3}>
                <FormControl variant="outlined" required fullWidth={true}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Project Title
                  </InputLabel>
                  <OutlinedInput
                    label="Project Title"
                    value={titleValue}
                    onChange={titleChangeHandler}
                    error={!titleIsValid}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" required fullWidth={true}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Project Subtitle
                  </InputLabel>
                  <OutlinedInput
                    label="Project Subtitle"
                    value={subtitleValue}
                    onChange={subtitleChangeHandler}
                    error={!subtitleIsValid}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" fullWidth={true}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Project Link
                  </InputLabel>
                  <OutlinedInput
                    label="Project Link"
                    value={linkValue}
                    onChange={linkChangeHandler}
                    error={!linkIsValid}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" fullWidth={true}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Github Link
                  </InputLabel>
                  <OutlinedInput
                    label="Github link"
                    value={gitValue}
                    onChange={gitChangeHandler}
                    error={!gitIsValid}
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
                    value={descValue}
                    onChange={descChangeHandler}
                    error={!descIsValid}
                  />
                </FormControl>
              </Grid>

              <br />
              <br />
              <Grid item xs={12} style={{ padding: "25px 40px 5px 0px" }}>
                <h3 style={{ margin: "0" }}>Technologies Used</h3>
              </Grid>

              <Grid item xs={12} style={{ padding: "25px 40px 5px 40px" }}>
                <button
                  className="add-button"
                  type="button"
                  onClick={onAddTool}
                >
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
                  style={{ paddingTop: "20px" }}
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

            <br />
            <hr style={{ backgroundColor: "var(--lightest-slate)" }} />
            <Grid item xs={12} style={{ padding: "25px 40px 5px 0px" }}>
              <h3 style={{ margin: "0" }}>Project Images</h3>
            </Grid>

            <Grid item xs={12} style={{ padding: "10px 40px 0px 40px" }}>
              <DropZone
                formIsValid={formIsValid}
                files={images}
                setFiles={setFiles}
              />
            </Grid>
          </Paper>
        </form>
      </Paper>

      <ConfirmationBox
        open={dialog}
        setOpen={setDialog}
        confirm={saveProject}
        dialogTitle="Saving project..."
        confirmationMessage="Are you sure you want to save this project?."
        yesMessage="Yes"
      />
    </Wrapper>
  );
};

export default ProjectForm;
