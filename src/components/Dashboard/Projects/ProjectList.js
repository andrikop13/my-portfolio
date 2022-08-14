import {
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import EditIcon from "@material-ui/icons/EditOutlined";
import Wrapper from "../Wrapper";
import { BsBoxArrowUpRight } from "react-icons/bs";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--logo-color)",
    color: "var(--lightest-slate)",
    fontSize: "var(--fonts-md)",
    padding: "3rem",
    borderBottom: "1px solid black",
    fontFamily: "inherit",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "var(--fonts-sm)",
    backgroundColor: "var(--lightest-slate)",
    fontFamily: "inherit",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },

  "& .MuiSvgIcon-root": {
    fontSize: "2.2rem",
    fill: "var(--logo-color)",
  },
}));

const ProjectList = () => {
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.list);

  const onToggleEditMode = (projectId) => {
    navigate(`${URL_CONFIG.baseURLs.projects}/${projectId}`);
  };

  return (
    <Wrapper>
      <Paper className="paper-container" sx={{ borderRadius: 4 }}>
        <TableContainer
          sx={{
            borderRadius: 1,
            maxWidth: "90vw",
            maxHeight: "calc(100vh - var(--nav-height) - 10rem)",
            boxShadow: "0.5rem 1rem 2rem rgba(0, 0, 0, 0.3)",
          }}
        >
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Action</StyledTableCell>
                <StyledTableCell align="left">Preview</StyledTableCell>
                <StyledTableCell align="left">Subtitle</StyledTableCell>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Project Link</StyledTableCell>
                <StyledTableCell align="left">Github Link</StyledTableCell>
              </TableRow>
            </TableHead>
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

                  <StyledTableCell align="left">
                    {project.subtitle}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    {project.title}
                  </StyledTableCell>

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
          </Table>
        </TableContainer>
      </Paper>
    </Wrapper>
  );
};

export default ProjectList;
