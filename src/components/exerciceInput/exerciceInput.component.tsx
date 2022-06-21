import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./exerciceInput.component.styles.scss";
import { capitalizeFirstLetter } from "../../utils/functions";

interface ExerciceInputProps {
  value: string;
  options: { name: string }[];
  handleChange: any;
  label: string;
}

const ExerciceInput = ({
  value,
  options,
  handleChange,
  label,
}: ExerciceInputProps) => {
  return (
    <Autocomplete
      disablePortal
      options={options.map((option: { name: string }) => option.name)}
      onChange={handleChange}
      value={value && capitalizeFirstLetter(value)}
      isOptionEqualToValue={(option: string, value: string) =>
        option.toLowerCase() === value.toLowerCase()
      }
      sx={{
        width: "75%",
        background: "#D9D9D9",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default ExerciceInput;
