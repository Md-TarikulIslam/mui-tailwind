/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, DialogActions, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { PrimaryButton, TonalButton } from "./Buttons";
import { Warning } from "@mui/icons-material";

export default function DeleteDialog({
  title,
  open,
  handleClose,
  handleDelete,
}) {
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: "24px",
          },
        }}
      >
        <DialogTitle className="p-0">{title}</DialogTitle>
        <DialogContent className="p-0">
          <Box className="py-6 flex flex-col gap-4 items-center justify-center">
            <Warning
              fontSize="large"
              color="error"
              className="animate-bounce"
            />
            <Typography className="h4 font-semibold" color="error">
              Are you sure want to delete this?
            </Typography>
          </Box>
          <DialogActions className="p-0">
            <PrimaryButton
              color="error"
              onClick={handleDelete}
              title="Delete"
              size="medium"
              className="rounded-md"
            />
            <TonalButton
              color="success"
              onClick={handleClose}
              title="Cancel"
              size="medium"
              className="rounded-md"
            />
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
