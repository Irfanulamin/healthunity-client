import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import CategoryChart from "./CategoryChart";

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
            <div className="border-2 border-black rounded-md p-6 my-6">
              <div>
                <h2 className="text-xl lg:text-3xl font-semibold  text-[#a80000]">
                  Data Stattistics!
                </h2>
                <p className="text-black">
                  [available product regarding their categories]
                </p>
                <div className="flex flex-wrap md:flex-row lg:flex-row justify-center items-center gap-4">
                  <div>
                    <CategoryChart />
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/2">
                    <p className="text-xs text-black">
                      The pie chart visually breaks down our product categories,
                      offering a quick and intuitive overview. Decision-makers
                      can analyze popularity, plan strategically, and manage
                      inventory effectively. This tool provides actionable
                      insights, supporting informed decisions and enhancing
                      overall business efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
