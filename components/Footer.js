import Fab from "@components/Fab";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Grid direction="column">
        <Grid item xs>
          <Grid
            item
            xs
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            textAlign="center"
            bgcolor="primary"
          >
            <Grid item xs={12} sm={5}>
              <List>
                <ListItemText>
                  <Typography variant="h6">link.bepi.tech</Typography>
                </ListItemText>
                <ListItemText>
                  <Typography variant="body2" fontSize={11}>
                    link.bepi.tech is an open-source and easy to use URL
                    shortener.
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Fab />
            </Grid>
            <Grid item xs={12} sm={5}>
              <List>
                <ListItemText>
                  <Typography variant="h6">Links</Typography>
                </ListItemText>
                <ListItemText>
                  <a
                    href="https://github.com/bepi-tech/link.bepi.tech"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body2" fontSize={11}>
                      Source code
                    </Typography>
                  </a>
                </ListItemText>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid
            item
            xs
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
            bgcolor="primary.dark"
          >
            <Grid item xs my={2}>
              <Typography variant="body2" fontSize={11}>
                Copyright (c) 2021 BePi
              </Typography>
            </Grid>
            <Grid item xs my={2}>
              <a
                href="https://bepi.tech"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Typography variant="body2" fontSize={11}>
                  BePi
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
