import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  SlidersOutlined,
  RadarChartOutlined,
  LineChartOutlined,
  DollarOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const items = [
  getItem('Дешборд', 'dashboard', <PieChartOutlined />),
  getItem('Новая трата', 'spending', <AppstoreAddOutlined />),
  getItem('История', 'history', <SlidersOutlined />),
  getItem('Категории', 'category', <RadarChartOutlined />),
  getItem('Аналитика', 'analytic', <LineChartOutlined />),
  getItem('Бюджеты', 'budget', <DollarOutlined />),
  getItem('Личный кабинет', 'account', <SettingOutlined />),
];

const paths = {
  dashboard: '/dashboard-page',
  spending: '/dashboard-page/spending',
  history: '/dashboard-page/history',
  category: '/dashboard-page/category',
  analytic: '/dashboard-page/analytic',
  budget: '/dashboard-page/budget',
  account: '/dashboard-page/account',
};

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getSelectedKey = () => {
    const path = location.pathname
    return Object.keys(paths).find(key => paths[key] === path) || 'dashboard';
  }

  const handleMenuClick = ({key}) => {
    navigate(paths[key])
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu 
        theme="dark" 
        selectedKeys={[getSelectedKey()]} 
        mode="inline" 
        items={items} 
        onSelect={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        Anthony ©{new Date().getFullYear()} Created by Default
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardPage;