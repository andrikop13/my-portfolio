import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconButton, TableBody } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@material-ui/icons/EditOutlined";
import { URL_CONFIG } from "@config";
import {
  Wrapper,
  CustomTable,
  StyledTableCell,
  StyledTableRow,
} from "@components/dashboard";
import { ConfirmationBox } from "@components/sections";
import { deleteProject, uiActions } from "@store";

const columns = [
  "Action",
  "Preview",
  "Subtitle",
  "Title",
  "Project Link",
  "Github Link",
];

const ProjectList = () => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({
    open: false,
    projectId: null,
  });
  const projectsChanged = useSelector(
    (state) => state.projects.projectsChanged
  );
  const deletedProject = useSelector((state) => state.projects.projectDelete);

  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);

  const checkForMessages = useCallback(() => {
    deletedProject &&
      dispatch(
        uiActions.showMessage({
          message: "Project was deleted successfully",
          status: "success",
        })
      );

    projectsChanged &&
      dispatch(
        uiActions.showMessage({
          message: "Projects saved successfully",
          status: "success",
        })
      );
  }, [projectsChanged, dispatch, deletedProject]);

  useEffect(() => {
    checkForMessages();
  });

  const onToggleEditMode = (projectId) => {
    navigate(`${URL_CONFIG.baseURLs.projects}/${projectId}`);
  };

  const onDelete = (projectId) => {
    setDialog({ open: true, projectId: projectId });
  };

  const deleteProjectCompletely = () => {
    dispatch(deleteProject(dialog.projectId));
  };

  const createNewProject = () => {
    navigate(`${URL_CONFIG.baseURLs.newProject}`);
  };

  return (
    <Wrapper>
      <CustomTable columns={columns} createNewItem={createNewProject}>
        <TableBody>
          {projects.map((project) => (
            <StyledTableRow key={project.id}>
              <StyledTableCell align="left">
                <IconButton
                  sx={{ marginLeft: "10px" }}
                  aria-label="edit"
                  onClick={() => onToggleEditMode(project.id)}
                >
                  <EditIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>

                <IconButton
                  sx={{ marginLeft: "0px" }}
                  aria-label="edit"
                  onClick={() => onDelete(project.id)}
                >
                  <DeleteIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="left">
                <img
                  src={project.images?.length ? project.images[0] : ""}
                  alt="Preview photography"
                  style={{
                    width: "140px",
                    height: "80px",
                    boxShadow: "0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.5)",
                  }}
                />{" "}
              </StyledTableCell>

              <StyledTableCell align="left">{project.subtitle}</StyledTableCell>

              <StyledTableCell align="left">{project.title}</StyledTableCell>

              <StyledTableCell align="left">
                {project.link !== undefined ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="links">
                      Link
                      <BsBoxArrowUpRight
                        size={15}
                        style={{ marginTop: "-0.3rem" }}
                      />
                    </div>
                  </a>
                ) : null}
              </StyledTableCell>

              <StyledTableCell align="left">
                {project.github !== undefined ? (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="links">
                        Github
                        <BsBoxArrowUpRight
                          size={15}
                          style={{ marginTop: "-0.3rem" }}
                        />
                      </div>
                    </a>
                  </>
                ) : null}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </CustomTable>

      <ConfirmationBox
        dialog={dialog}
        open={dialog.open}
        setOpen={setDialog}
        confirm={deleteProjectCompletely}
        dialogTitle="Deleting a project completely..."
        confirmationMessage="Are you sure you want to delete this project? If accept, there is no way back."
        yesMessage="Delete!"
      />
    </Wrapper>
  );
};

export default ProjectList;
