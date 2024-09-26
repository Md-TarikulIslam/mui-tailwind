import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../components/shared/Footer";
import DashboardNavBar from "./DashboardNavbar";
import DashboardSideBar from "./DashboardSidebar";
import MobileSidebar from "./MobileSidebar";

const DashboardLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleLogOut = () => {};

  return (
    <>
      {/* navbar*/}
      <div className="relative mx-auto h-svh p-3 lg:h-screen">
        <div className="flex gap-3">
          <DashboardSideBar />

          <main className="flex w-full flex-col gap-3">
            <DashboardNavBar
              openSideBar={openSideBar}
              setOpenSideBar={setOpenSideBar}
              handleLogOut={handleLogOut}
              // user={user}
            />
            <div className="scrollbar-hidden h-[calc(100svh-144px)] overflow-y-scroll rounded-2xl bg-childLight p-4 text-black dark:bg-dark dark:text-white md:h-[calc(100vh-174px)]">
              <Outlet />
            </div>
            <Footer />
          </main>
        </div>
      </div>

      {/* Mobile SideBar */}
      <MobileSidebar
        open={openSideBar}
        handleClose={() => setOpenSideBar(!openSideBar)}
      />
    </>
  );
};

export default DashboardLayout;
