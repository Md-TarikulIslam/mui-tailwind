/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export const PrimaryButton = ({
  title,
  size,
  className,
  variant,
  ...props
}) => {
  return (
    <Button
      variant={variant ? variant : "contained"}
      size={size ? size : "small"}
      className={`normal-case px-6 ${className}`}
      {...props}
    >
      {title}
    </Button>
  );
};

export const TonalButton = ({
  title,
  color = "primary",
  className,
  size,
  sx,
  ...props
}) => {
  return (
    <Button
      size={size ? size : "small"}
      className={`normal-case px-6 ${className}`}
      sx={{
        backgroundColor: (theme) => `${theme.palette[color].main}1A`, // 1A is for 10% opacity
        "&:hover": {
          backgroundColor: (theme) => `${theme.palette[color].main}33`, // 20% opacity on hover
        },
        color: (theme) => `${theme.palette[color].main}`,
        ...sx, // Spread any additional sx props
      }}
      {...props}
    >
      {title}
    </Button>
  );
};
