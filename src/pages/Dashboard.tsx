import React from 'react';
import { Layout,theme } from 'antd';
import DashboardHeader from '../components/Header/DashboardHeader';
import DashboardSider from '../components/Sider/DashboardSider';
import DashboardContent from '../components/Content/DashboardContent';


const { Content } = Layout;


const Dashbaord: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{height : '100vh'}}>
      <DashboardHeader/>
      <Content >
        <Layout style={{ background: colorBgContainer, borderRadius: borderRadiusLG }} className='min-h-[95vh]'>
          <DashboardSider/>
          <DashboardContent/>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Dashbaord;