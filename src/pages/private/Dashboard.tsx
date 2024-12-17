import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh", height: "100%" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header></Header>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
