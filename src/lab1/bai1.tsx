import { Layout , Menu } from "antd";
import {
  HomeOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function Lab1Bai1() {
  return (
    <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content</Content>
      <Sider>
        <div
          style={{
            color: "red",
            textAlign: "center",
            padding: "16px",
            fontWeight: "bold",
          }}
        >
          WEB2091
        </div>

        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Trang chủ",
            },
            {
              key: "2",
              icon: <ShoppingOutlined />,
              label: "Sản phẩm",
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: "Người dùng",
            },
          ]}
        />
      </Sider>

      <Footer>Footer</Footer>
    </Layout>
  );
}
