import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function RowRadioButtonsGroup() {
  return (
    <FormControl className='tipoPagamentoCOuD'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio className="custom-radio"/>} label="Crédito" />
        <FormControlLabel value="male" control={<Radio className="custom-radio"/>} label="Débito" />
      </RadioGroup>
    </FormControl>
  );
}
