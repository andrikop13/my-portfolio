import { Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import { addJob } from "../../../store/jobs/jobs-actions";
import { uiActions } from "../../../store/ui/ui-slice";
import ConfirmationBox from "../../Sections/Contact/confirmationBox";
import Wrapper from "../Wrapper";
import JobInfo from "./JobInfo";
import useInput from "../../../hooks/use-input";

const isNotEmpty = (value) => String(value).toLowerCase() !== "";
const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString)) && isNotEmpty(urlString);
  } catch (e) {
    return;
  }
};
const JobForm = () => {
  const [dialog, setDialog] = useState(false);
  const [descriptions, setDescriptions] = useState({ data: [""] });
  const navigate = useNavigate();

  const jobs = useSelector((state) => state.jobs.list);
  const { jobId } = useParams();
  const currentJob = jobId ? jobs.find((pr) => pr.id === jobId) : null;

  const dispatch = useDispatch();

  useEffect(() => {
    if (jobId) {
      const { descriptionItems } = currentJob;
      setDescriptions({ data: descriptionItems });
    }
  }, [currentJob, jobId]);

  const {
    value: positionValue,
    isValid: positionIsValid,
    valueChangeHandler: positionChangeHandler,
  } = useInput(isNotEmpty, jobId ? currentJob.position : "");

  const {
    value: organizationValue,
    isValid: organizationIsValid,
    valueChangeHandler: organizationChangeHandler,
  } = useInput(isNotEmpty, jobId ? currentJob.organization : "");

  const {
    value: dateValue,
    isValid: dateIsValid,
    valueChangeHandler: dateChangeHandler,
  } = useInput(isNotEmpty, jobId ? currentJob.date : "");

  const {
    value: linkValue,
    isValid: linkIsValid,
    valueChangeHandler: linkChangeHandler,
  } = useInput(isValidUrl, jobId ? currentJob.link : "");

  let formIsValid =
    positionIsValid && organizationIsValid && dateIsValid && linkIsValid;

  const submitJob = (e) => {
    e.preventDefault();
    setDialog(true);
  };

  const saveJob = async () => {
    const send = () => {
      dispatch(
        addJob(
          {
            position: positionValue,
            organization: organizationValue,
            descriptionItems: descriptions.data.filter((desc) => desc !== ""),
            date: dateValue,
            link: linkValue,
          },
          jobId ? jobId : null
        )
      );

      navigate(URL_CONFIG.baseURLs.jobs);
    };

    if (
      !jobId &&
      jobs.find((pr) => pr.organization === organizationValue) &&
      jobs.find((pr) => pr.position === positionValue)
    ) {
      dispatch(
        uiActions.showMessage({
          message:
            "Experience with that position and organization already exists!",
          status: "error",
        })
      );

      return;
    }

    send();
  };

  return (
    <Wrapper>
      <form onSubmit={submitJob}>
        <Paper
          className="paper-container"
          sx={{
            borderRadius: 1,
            padding: "1rem 1rem 2rem 2rem",
            background: "var(--lightesttt-slate)",
            boxShadow: "-1rem -0.5rem 4rem rgba(0, 0, 0, 0.4)",
          }}
        >
          <JobInfo
            position={positionValue}
            positionChange={positionChangeHandler}
            positionIsValid={positionIsValid}
            descriptions={descriptions}
            setDescriptions={setDescriptions}
            organization={organizationValue}
            organizationChange={organizationChangeHandler}
            organizationIsValid={organizationIsValid}
            date={dateValue}
            dateChange={dateChangeHandler}
            dateIsValid={dateIsValid}
            link={linkValue}
            linkChange={linkChangeHandler}
            linkIsValid={linkIsValid}
          />

          <br />
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="login-button"
              disabled={!formIsValid}
              type="submit"
            >
              SAVE &rarr;
            </button>
          </Grid>
          <br />
        </Paper>
      </form>

      <ConfirmationBox
        open={dialog}
        setOpen={setDialog}
        confirm={saveJob}
        dialogTitle="Saving job..."
        confirmationMessage="Are you sure you want to save this Job?"
        yesMessage="Yes"
      />
    </Wrapper>
  );
};

export default JobForm;
