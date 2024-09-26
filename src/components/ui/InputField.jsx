/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export const InputField = ({ className, ...props }) => {
  return <TextField className={`${className}`} {...props} />;
};
