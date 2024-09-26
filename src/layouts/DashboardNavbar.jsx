/* eslint-disable react/prop-types */

import { IconButton } from "@mui/material";
import ThemeToggle from "./../components/ThemeToggle";
import DashboardProfile from "./DashboardProfile";
import { Menu } from "@mui/icons-material";

const DashboardNavBar = ({
  openSideBar,
  setOpenSideBar,
  handleLogOut,
  user,
}) => {
  // const { pathname } = useLocation();

  return (
    <div className="sticky top-0 block rounded-2xl bg-childLight p-2 text-black shadow-none dark:bg-dark dark:text-white lg:p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4 lg:hidden">
          <IconButton
            size="sm"
            // variant="text"
            onClick={() => setOpenSideBar(!openSideBar)}
            className="rounded-lg dark:bg-childDark bg-light"
          >
            <Menu className="text-2xl dark:text-white" />
          </IconButton>
        </div>

        <div className="flex w-full items-center justify-end gap-1 lg:justify-between">
          <div>
            <DashboardProfile
              handleLogOut={handleLogOut}
              user={user}
              // pathname={pathname}
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  );
};

export default DashboardNavBar;
