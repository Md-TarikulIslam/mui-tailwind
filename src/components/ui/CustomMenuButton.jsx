/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ArrowDropDown, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Collapse } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CustomMenuButton = ({ item, active, handleClose }) => {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const toggleOpen = () => setSubMenuOpen((cur) => !cur);

  return (
    <div className="rounded-xl">
      {item?.children ? (
        <div className={`lg:px-0`}>
          <Button
            variant="text"
            color="primary"
            size="large"
            className={`w-full rounded-xl p-0 text-sm capitalize shadow-none`}
            onClick={toggleOpen}
            fullWidth
          >
            <Box className="flex items-center justify-between px-3 py-3 w-full">
              <Box className="flex items-center gap-2">
                <span>
                  {React.createElement(item?.icon, { className: "text-lg" })}
                </span>
                <div className="flex flex-wrap">
                  <p>{item?.label}</p>
                </div>
              </Box>
              <span>
                <ArrowDropDown
                  className={`${subMenuOpen ? "rotate-180" : ""}  duration-200`}
                />
              </span>
            </Box>
          </Button>
          <Collapse in={subMenuOpen} className="bg-transparent">
            <div className="flex flex-col gap-0">
              {item?.children?.map((child, index) => (
                <div key={index}>
                  <ChildMenuButton child={child} handleClose={handleClose} />
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      ) : (
        <Button
          component={RouterLink}
          to={item?.path}
          onClick={handleClose}
          variant="text"
          color="primary"
          size="large"
          className={`w-full rounded-xl p-0 text-sm capitalize shadow-none`}
          fullWidth
        >
          <Box className="flex items-center justify-between px-3 py-3 w-full">
            <Box className="flex items-center gap-2">
              <span>
                {React.createElement(item?.icon, { className: "text-lg" })}
              </span>
              <div className="flex flex-wrap">
                <p>{item?.label}</p>
              </div>
            </Box>
          </Box>
        </Button>
      )}
    </div>
  );
};

const ChildMenuButton = ({ child, handleClose }) => {
  const [childSubMenuOpen, setChildSubMenuOpen] = React.useState(false);
  const toggleChildOpen = () => setChildSubMenuOpen((cur) => !cur);

  return (
    <div className="lg:px-0">
      {child?.children ? (
        <div>
          <Button
            color="primary"
            variant="text"
            className={`w-full rounded-xl text-[13px] capitalize`}
            onClick={toggleChildOpen}
            fullWidth
            size="large"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span>
                  <ArrowDropDown
                    className={`${
                      childSubMenuOpen ? "rotate-180" : ""
                    } text-lg duration-200`}
                  />
                </span>
                <p>{child?.label}</p>
              </div>
            </div>
          </Button>
          <Collapse in={childSubMenuOpen} className={`bg-transparent`}>
            <div className="ml-2 flex flex-col gap-0">
              {child?.children?.map((subChild, index) => (
                <ChildMenuButton
                  key={index}
                  child={subChild}
                  handleClose={handleClose}
                />
              ))}
            </div>
          </Collapse>
        </div>
      ) : (
        <Button
          component={RouterLink}
          to={child?.path}
          onClick={handleClose}
          size="large"
          variant="text"
          color="primary"
          className={`w-full rounded-xl text-[13px] capitalize`}
          fullWidth
        >
          <div className={`flex items-center gap-2 py-0 w-full`}>
            <span>
              <KeyboardArrowRight className="text-lg" />
            </span>
            <p>{child?.label}</p>
          </div>
        </Button>
      )}
    </div>
  );
};

export default CustomMenuButton;
