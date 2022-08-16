const {
  tableCellClasses,
  styled,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Paper,
} = require("@mui/material");

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--logo-color)",
    color: "var(--lightest-slate)",
    fontSize: "var(--fonts-md)",
    padding: "2.5rem",
    borderBottom: "1px solid black",
    fontFamily: "inherit",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "var(--fonts-sm)",
    backgroundColor: "var(--lightest-slate)",
    fontFamily: "inherit",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
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

const CustomTable = (props) => {
  return (
    <Paper
      className="paper-container"
      sx={{ borderRadius: 4, backgroundColor: "var(light-slate)" }}
    >
      <div
        style={{
          padding: "0.5rem 2.5rem 0 2.5rem",
          backgroundColor: "var(--logo-color)",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <button
          className="small-button"
          onClick={props.createNewItem}
          style={{ cursor: "pointer" }}
        >
          Προσθήκη +
        </button>
      </div>
      <TableContainer
        sx={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          maxWidth: "90vw",
          maxHeight: "calc(100vh - var(--nav-height) - 13rem)",
        }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {props.columns.map((col) => (
                <StyledTableCell key={col} align="left">
                  {col}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.children}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
