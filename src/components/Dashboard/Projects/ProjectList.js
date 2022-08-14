import { IconButton, TableBody } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import EditIcon from "@material-ui/icons/EditOutlined";
import Wrapper from "../Wrapper";
import { BsBoxArrowUpRight } from "react-icons/bs";
import CustomTable, {
  StyledTableCell,
  StyledTableRow,
} from "../Table/CustomTable";
import ConfirmationBox from "../../Sections/Contact/confirmationBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { projectsActions } from "../../../store/projects/projects-slice";

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

  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);

  const onToggleEditMode = (projectId) => {
    navigate(`${URL_CONFIG.baseURLs.projects}/${projectId}`);
  };

  const onDelete = (projectTitle) => {
    setDialog({ open: true, projectTitle: projectTitle });
  };

  const deleteProject = () => {
    dispatch(projectsActions.deleteProject(dialog.projectTitle));
  };

  return (
    <Wrapper>
      <CustomTable columns={columns}>
        <TableBody>
          {projects.map((project, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell align="left">
                <IconButton
                  sx={{ marginLeft: "15px" }}
                  aria-label="edit"
                  onClick={() => onToggleEditMode(id)}
                >
                  <EditIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>

                <IconButton
                  sx={{ marginLeft: "15px" }}
                  aria-label="edit"
                  onClick={() => onDelete(project.title)}
                >
                  <DeleteIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="left">
                <img
                  src={project.images[0]}
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
        confirm={deleteProject}
        dialogTitle="Deleting a project completely..."
        confirmationMessage="Are you sure you want to delete this project? If accept, there is no way back."
        yesMessage="Delete!"
      />
    </Wrapper>
  );
};

export default ProjectList;
