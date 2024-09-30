/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Warning } from "@mui/icons-material";
import {
  Box,
  DialogActions,
  Grow,
  IconButton,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import { PrimaryButton, TonalButton } from "./Buttons";

export default function DeleteDialog({ open, handleClose, handleDelete }) {
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        elevation={0}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent className="p-0">
          <Box className="pb-6 flex flex-col gap-4 items-center justify-center">
            <IconButton
              size="large"
              className="bg-red-500/10 hover:bg-red-500/10 cursor-auto"
            >
              <Warning fontSize="large" color="error" />
            </IconButton>
            <Typography className="text-3xl font-semibold dark:text-gray-300 text-gray-600">
              Delete
            </Typography>
            <Typography className="h4 text-center">
              You're going to delete this. Are you sure?
            </Typography>
          </Box>
          <DialogActions className="p-0 ">
            <div className="flex flex-col gap-4 sm:flex-row items-start w-full">
              <TonalButton
                color="success"
                onClick={handleClose}
                title="No, Keep it."
                size="large"
                className="rounded-full "
                fullWidth
              />
              <PrimaryButton
                color="error"
                onClick={handleDelete}
                title="Yes, Delete!"
                size="large"
                className="rounded-full "
                fullWidth
              />
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
