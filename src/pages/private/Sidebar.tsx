import { Layout, Menu } from "antd";

import { dashboardPath } from "../../routes/dashboardPath";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const sideBarItems = sidebarItemsGenerator(dashboardPath);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          color: "white",
          fontWeight: "600",
          padding: "20px",
        }}
      >
        <NavLink to="/">
          <div className="flex justify-center items-center">
            <h1 className="text-lg font-extrabold">HealthUnity</h1>
            <img src="/logo.jpg" alt="" className="w-6 h-6" />
          </div>
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
