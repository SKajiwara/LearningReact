import React from "react";
import { Grid, Box, Card, CardContent, Typography } from '@mui/material'
function ControlBox(): JSX.Element {
  return (
    <CardContent>
      <Box component={Typography} color="gray" sx={{ fontSize: 14 }}>
        Control
      </Box>
    </CardContent>
  );
}

export default ControlBox;