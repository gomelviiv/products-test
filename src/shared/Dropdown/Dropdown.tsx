import { FC, memo, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  options: string[];
  onChange: (type: string) => void;
}

const Dropdown: FC<Props> = ({ options, onChange }) => {
  const [type, setType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
    setType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-multiple-name-label">Type category</InputLabel>
      <Select
        value={type}
        onChange={handleChange}
        displayEmpty
        input={<OutlinedInput label="Type category" />}
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((option, index) => (
          <MenuItem value={option} key={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select the device type</FormHelperText>
    </FormControl>
  );
};

export default memo(Dropdown);
