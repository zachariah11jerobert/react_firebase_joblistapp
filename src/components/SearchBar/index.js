import { Box, Button, makeStyles, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select disableUnderline variant="filled" defaultValue="Full time">
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue="Remote">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>
      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Box>
  );
};
