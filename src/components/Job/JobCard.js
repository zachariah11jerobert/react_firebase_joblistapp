import { Box, Grid, Typography } from "@material-ui/core";

const skills = ["Javascript", "React.js", "Node.js"];

export default (props) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs>
          <Typography varient="subtitle1">Frontend</Typography>
          <Typography varient="subtitle2">Google</Typography>
        </Grid>
        <Grid item container xs>
          {skills.map((skill) => (
            <Grid key={skill} item>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption">
              2577 min ago | Full time | Remote
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
