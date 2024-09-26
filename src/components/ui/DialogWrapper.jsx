/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

export default function DialogWrapper({
  title,
  size,
  content,
  open,
  handleClose,
}) {
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={size ? size : "sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
