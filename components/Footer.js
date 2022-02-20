import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <footer>
      <AppBar position="static">
        <Grid
          item
          xs
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          textAlign="center"
          bgcolor="primary"
        >
          <Grid item xs my={2}>
            <Typography variant="body2">Copyright (c) 2021 BePi</Typography>
          </Grid>
          <Grid item xs my={2}>
            <a
              href="https://github.com/bepi-tech/link.bepi.tech"
              target="_blank"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Typography variant="body2">About</Typography>
            </a>
          </Grid>
        </Grid>
      </AppBar>
    </footer>
  );
}
