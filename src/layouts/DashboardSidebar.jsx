import logo from "../assets/images/logo/logo.png";

import { Logout } from "@mui/icons-material";
import { Box, List } from "@mui/material";
import { TonalButton } from "../components/ui/Buttons";
import { adminMenus } from "../static/menuLinks";
import CustomMenuButton from "./../components/ui/CustomMenuButton";
import { Link as RouterLink } from "react-router-dom";

const DashboardSideBar = () => {
  // const { pathname } = useLocation();

  const handleLogOut = () => {};

  // if (!token) {
  //   return <Navigate to="/login" replace={true} />;
  // }

  return (
    <div className="hidden h-[calc(100vh-24px)] w-[22rem] flex-col justify-between overflow-y-hidden rounded-2xl bg-childLight dark:bg-dark lg:flex">
      <nav className="sticky top-0 py-4">
        <div className="flex w-full items-center justify-evenly px-5 pb-4">
          <Box
            component={RouterLink}
            to="/"
            className="flex items-center justify-center"
          >
            <img className="w-1/3" src={logo} alt="Logo" />
          </Box>
        </div>
        <div className="scrollbar-hidden h-[calc(100vh-160px)] overflow-y-auto py-2">
          <List className="gap-2 p-0 px-2">
            {adminMenus?.map((item, i) => (
              <CustomMenuButton
                key={i}
                item={item}
                // active={pathname === item?.path}
              />
            ))}
          </List>
        </div>
      </nav>

      {/* logout */}
      <div className="sticky bottom-2 bg-childLight px-2 dark:bg-dark">
        <div>
          <TonalButton
            variant="text"
            size="large"
            color="error"
            onClick={handleLogOut}
            title="Logout"
            startIcon={<Logout />}
            className="rounded-xl"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
