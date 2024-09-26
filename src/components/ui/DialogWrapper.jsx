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
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: "24px",
          },
        }}
        fullWidth={fullWidth}
        maxWidth={size ? size : "sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className="p-0">{title}</DialogTitle>
        <DialogContent className="px-0 py-6 ">{content}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
