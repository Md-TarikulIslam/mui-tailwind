/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import logo from "../assets/images/logo/logo.png";

import { Close, Logout } from "@mui/icons-material";
import { Button, Drawer, IconButton, List } from "@mui/material";
import CustomMenuButton from "../components/ui/CustomMenuButton";
import { adminMenus } from "../static/menuLinks";
import { TonalButton } from "../components/ui/Buttons";

const MobileSidebar = ({ open, handleClose }) => {
  // const { pathname } = useLocation();

  const handleLogOut = () => {};

  return (
    <Drawer open={open} onClose={handleClose} className="bg-transparent">
      <div className="flex h-svh flex-col justify-between rounded-r-2xl bg-light p-4 dark:bg-dark">
        <div>
          <div className="flex items-center justify-between pb-4">
            <a to="/" className="flex items-center">
              <img className="w-1/3" src={logo} alt="" />
            </a>

            <IconButton
              className="rounded-lg dark:bg-childDark bg-light"
              onClick={handleClose}
            >
              <Close className="text-2xl" />
            </IconButton>
          </div>
          <div className="scrollbar-hidden mb-4 h-[calc(100vh-190px)] overflow-auto py-2">
            <List className="gap-2 p-0">
              {adminMenus?.map((item, i) => (
                <CustomMenuButton
                  key={i}
                  item={item}
                  handleClose={handleClose}
                  // active={pathname === item?.path}
                />
              ))}
            </List>
          </div>
        </div>

        {/* logout */}

        <div className="sticky bottom-0 bg-light py-4 dark:bg-dark">
          <div className="flex w-full flex-col">
            <TonalButton
              color="error"
              size="large"
              className="rounded-lg"
              onClick={handleLogOut}
              title="Logout"
              startIcon={<Logout />}
              fullWidth
            />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
