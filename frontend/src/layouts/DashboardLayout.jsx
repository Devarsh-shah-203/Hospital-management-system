import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function DashboardLayout() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;