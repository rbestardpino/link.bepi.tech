import { Box, Grid, TextField } from "@mui/material";
import { cloneElement, useState } from "react";

export default function IconTextField({ icon, label, onChange, value, error }) {
  const [active, setActive] = useState(false);

  return (
    <Grid
      container
      direction="row"
      columnSpacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs="auto">
        {cloneElement(icon, {
          color: error ? "error" : active ? "secondary" : "",
        })}
      </Grid>
      <Grid item xs>
        <Box component="form" autoComplete="off">
          <TextField
            error={error}
            fullWidth
            variant="outlined"
            label={label}
            value={value}
            color={error ? "error" : active ? "secondary" : ""}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChange={onChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
