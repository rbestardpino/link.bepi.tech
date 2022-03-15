import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import _Fab from "@mui/material/Fab";
import { useState } from "react";

export default function Fab() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClickOpen}>
        <_Fab color="error" aria-label="info">
          <InfoOutlinedIcon />
        </_Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>link.bepi.tech</DialogTitle>
        <DialogContent>
          <DialogContentText>
            link.bepi.tech is an open-source and easy to use URL shortener
          </DialogContentText>
          <DialogContentText variant="h6">
            Advantages over other URL Shorteners:
          </DialogContentText>
          <DialogContentText>It&apos;s FREE</DialogContentText>
          <DialogContentText>
            It&apos;s extremely simple and easy to use
          </DialogContentText>
          <DialogContentText>
            It&apos;s open source, so you can check that your data isn&apos;t
            being used to gain profit
          </DialogContentText>
          <DialogContentText>It&apos;s secure and reliable</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            href="https://github.com/bepi-tech/link.bepi.tech"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="secondary"
            onClick={handleClose}
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
          <Button
            href="https://www.bepi.tech/#"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="secondary"
            onClick={handleClose}
            startIcon={<VolunteerActivismIcon />}
          >
            Contribute
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
