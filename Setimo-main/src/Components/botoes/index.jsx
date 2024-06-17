import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
      </div>
      <div>
        <Button variant="contained" size="medium">
          Medium
        </Button>
      </div>
    </Box>
  );
}