/* eslint-disable react/prop-types */
import { Autocomplete, TextField } from "@mui/material";

const AutocompleteField = ({ options, label, value, ...props }) => {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={options}
        value={value || ""}
        {...props}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
};

export default AutocompleteField;
