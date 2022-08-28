import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const fontSize = { fontSize: "var(--fonts-mui-size)" };

const JobInfo = ({
  position,
  positionChange,
  positionIsValid,
  descriptions,
  setDescriptions,
  organization,
  organizationChange,
  organizationIsValid,
  date,
  dateChange,
  dateIsValid,
  link,
  linkChange,
  linkIsValid,
}) => {
  const navigate = useNavigate();
  const onAddDesc = () => {
    descriptions.data.length < 5 &&
      setDescriptions((prevState) => ({
        data: [...prevState.data, ""],
      }));
  };

  const onRemoveDesc = (index) => {
    setDescriptions((prevState) => ({
      data: prevState.data.filter((t, i) => i !== index),
    }));
  };

  const changeDescValue = (e, index) => {
    const descBack = [...descriptions.data];
    descBack[index] = e.target.value;

    setDescriptions(() => ({
      data: descBack,
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
        <Grid item md={4}>
          <FormControl variant="outlined" required fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Job position
            </InputLabel>
            <OutlinedInput
              label="Job position"
              value={position}
              sx={fontSize}
              onChange={positionChange}
              error={!positionIsValid}
            />
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl variant="outlined" required fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Job organization
            </InputLabel>
            <OutlinedInput
              label="Job organization"
              value={organization}
              onChange={organizationChange}
              error={!organizationIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <Grid item md={4}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Date range
            </InputLabel>
            <OutlinedInput
              label="Date range"
              value={date}
              onChange={dateChange}
              error={!dateIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <Grid item xs={8}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              organization Link
            </InputLabel>
            <OutlinedInput
              label="organization Link"
              value={link}
              onChange={linkChange}
              error={!linkIsValid}
              sx={fontSize}
            />
          </FormControl>
        </Grid>

        <br />
        <br />
        <Grid item xs={12} style={{ padding: "45px 40px 5px 0px" }}>
          <h3>Descriptions of the Job</h3>
        </Grid>

        <Grid item xs={12} style={{ padding: "25px 40px 5px 40px" }}>
          <button className="add-button" type="button" onClick={onAddDesc}>
            +
          </button>
          <span>
            {" "}
            <h5 style={{ display: "inline-block" }}>(max: 5)</h5>
          </span>
        </Grid>

        {descriptions.data.map((desc, index) => (
          <Grid
            key={`index_${index}`}
            item
            xs={12}
            style={{ paddingTop: "20px" }}
          >
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Description {index + 1}
              </InputLabel>
              <OutlinedInput
                label="Job Descriptions"
                multiline
                rows={2}
                value={desc}
                sx={fontSize}
                onChange={(event) => changeDescValue(event, index)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ marginLeft: "15px" }}
                      aria-label="edit"
                      onClick={onRemoveDesc.bind(null, index)}
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

export default JobInfo;
