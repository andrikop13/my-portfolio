import { Grid, Paper } from "@mui/material";
import Wrapper from "../Wrapper";
import ConfirmationBox from "../../Sections/Contact/confirmationBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DropZone from "./DropZone";
import ProjectInfo from "./ProjectInfo";
import { fileToBase64 } from "../../../utils";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import { addProject } from "../../../store/projects/projects-actions";
import { uiActions } from "../../../store/ui/ui-slice";
import { URL_CONFIG } from "../../../config/config";

const isNotEmpty = (value) => String(value).toLowerCase() !== "";
const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false || urlString === "";
  }
};

const ProjectForm = () => {
  const [dialog, setDialog] = useState(false);
  const [images, setFiles] = useState([]);
  const [tools, setTools] = useState({ data: [""] });
  const navigate = useNavigate();

  const projects = useSelector((state) => state.projects.list);
  const { projectId } = useParams();
  const currentProject = projectId
    ? projects.find((pr) => pr.id === projectId)
    : null;

  const existingImages = projectId ? currentProject.images : [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProject) {
      const { technologies_used } = currentProject;
      setTools({ data: technologies_used });
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

  const submitProject = (e) => {
    e.preventDefault();
    setDialog(true);
  };

  const saveProject = async () => {
    let base64Images = [];

    const send = () => {
      dispatch(
        uiActions.showMessage({
          message: "Saving project...",
          status: "info",
        })
      );
      dispatch(
        addProject(
          {
            title: titleValue,
            subtitle: subtitleValue,
            description: descValue,
            images: base64Images,
            technologies_used: tools.data.filter((tool) => tool !== ""),
            link: linkValue,
            github: gitValue,
          },
          currentProject ? projectId : null
        )
      );

      navigate(URL_CONFIG.baseURLs.projects);
    };

    if (!projectId && projects.find((pr) => pr.title === titleValue)) {
      dispatch(
        uiActions.showMessage({
          message: "Project with that name already exists!",
          status: "error",
        })
      );

      return;
    }

    images.forEach(async (file, index) => {
      const result = await fileToBase64(file);
      base64Images.push(result);

      images.length && index === images.length - 1 && send();
    });

    if (!images.length) base64Images = existingImages;
    !images.length && send();
  };

  return (
    <Wrapper>
      <form onSubmit={submitProject}>
        <Paper
          className="paper-container"
          sx={{
            borderRadius: 1,
            padding: "1.5rem 2rem",
            background: "var(--lightesttt-slate)",
            boxShadow: "-1rem -0.5rem 4rem rgba(0, 0, 0, 0.4)",
          }}
        >
          <ProjectInfo
            tools={tools}
            setTools={setTools}
            title={titleValue}
            titleChange={titleChangeHandler}
            titleIsValid={titleIsValid}
            subtitle={subtitleValue}
            subtitleChange={subtitleChangeHandler}
            subtitleIsValid={subtitleIsValid}
            description={descValue}
            descriptionChange={descChangeHandler}
            descriptionIsValid={descIsValid}
            link={linkValue}
            linkChange={linkChangeHandler}
            linkIsValid={linkIsValid}
            github={gitValue}
            githubChange={gitChangeHandler}
            gitIsValid={gitIsValid}
          />

          <br />
          <hr style={{ backgroundColor: "var(--lightest-slate)" }} />
          <Grid item xs={6} style={{ padding: "25px 40px 5px 0px" }}>
            <h3 style={{ margin: "0" }}>Project Images</h3>
          </Grid>

          <Grid item xs={12} style={{ padding: "10px 40px 0px 40px" }}>
            <DropZone
              formIsValid={formIsValid}
              files={images}
              existingImages={existingImages}
              setFiles={setFiles}
            />
          </Grid>
        </Paper>
      </form>

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
