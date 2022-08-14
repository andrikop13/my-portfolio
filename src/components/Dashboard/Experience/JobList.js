import { IconButton, TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import Wrapper from "../Wrapper";
import { BsBoxArrowUpRight } from "react-icons/bs";
import CustomTable, {
  StyledTableCell,
  StyledTableRow,
} from "../Table/CustomTable";
import { useState } from "react";
import ConfirmationBox from "../../Sections/Contact/confirmationBox";

const columns = ["Actions", "Position", "Organization", "Date", "Link"];

const JobList = () => {
  const [dialog, setDialog] = useState({
    open: false,
    projectId: null,
  });
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs.list);

  const onToggleEditMode = (jobId) => {
    navigate(`${URL_CONFIG.baseURLs.jobs}/${jobId}`);
  };

  const onDelete = (jobId) => {
    setDialog({ open: true, projectId: jobId });
  };

  const deleteJob = (jobId) => {};

  return (
    <Wrapper>
      <CustomTable columns={columns}>
        <TableBody>
          {jobs.map((job, id) => (
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
                  onClick={() => onDelete(id)}
                >
                  <DeleteIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
              </StyledTableCell>

              <StyledTableCell align="left">{job.position}</StyledTableCell>

              <StyledTableCell align="left">{job.organization}</StyledTableCell>
              <StyledTableCell align="left">{job.date}</StyledTableCell>

              <StyledTableCell align="left">
                {job.link !== undefined ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
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
            </StyledTableRow>
          ))}
        </TableBody>
      </CustomTable>

      <ConfirmationBox
        dialog={dialog}
        open={dialog.open}
        setOpen={setDialog}
        confirm={deleteJob}
        dialogTitle="Deleting a job completely..."
        confirmationMessage="Are you sure you want to delete this job? If accept, there is no way back."
        yesMessage="Delete!"
      />
    </Wrapper>
  );
};

export default JobList;
