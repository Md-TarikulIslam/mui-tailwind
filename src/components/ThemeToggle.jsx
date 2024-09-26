import { Brightness4 } from "@mui/icons-material";
import { IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        className="rounded-lg dark:bg-childDark bg-light"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={toggleTheme}
      >
        <Brightness4 />
      </IconButton>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Mode</Typography>
      </Popover>
    </div>
  );
};

export default ThemeToggle;
