import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  ShopOutlined
} from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { blue } from '@ant-design/colors';
import en_US from 'antd/lib/locale/en_US';
import Products from '../Products';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const customTheme = {
  '@primary-color': blue[5],
  '@link-color': blue[5],
  '@success-color': blue[3],
  '@warning-color': blue[2],
  '@error-color': blue[1],
};

class AdminPanel extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <ConfigProvider locale={en_US} theme={customTheme}>
        <Layout style={{ minHeight: '85vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<UserOutlined />}>
                Users
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                Orders
              </Menu.Item>
              <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Products">
                <Menu.Item key="3">All Products</Menu.Item>
                <Menu.Item key="4">Add Product</Menu.Item>
                <Menu.Item key="5">Categories</Menu.Item>
                <Menu.Item key="6">Brands</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Sellers">
                <Menu.Item key="7">All Sellers</Menu.Item>
                <Menu.Item key="8">Add Seller</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<ShopOutlined />} title="Store">
                <Menu.Item key="9">Settings</Menu.Item>
                <Menu.Item key="10">Payments</Menu.Item>
                <Menu.Item key="11">Shipping</Menu.Item>
              </SubMenu>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Various admin things!
                    <Products />
                </div>
            </Content>
        </Layout>
    </Layout>
</ConfigProvider>
);
}
}

export default AdminPanel;