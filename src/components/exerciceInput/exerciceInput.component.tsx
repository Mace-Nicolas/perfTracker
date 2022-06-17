import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./exerciceInput.component.styles.scss";
import { capitalizeFirstLetter } from "../../utils/functions";

const ExerciceInput = ({ value, options, handleChange, label }: any) => {
  return (
    <Autocomplete
      disablePortal
      options={options.map((option: any) => option.name)}
      onChange={handleChange}
      value={value && capitalizeFirstLetter(value)}
      isOptionEqualToValue={(option: any, value: any) =>
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
