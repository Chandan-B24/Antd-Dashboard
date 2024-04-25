import {AppstoreOutlined,CalendarOutlined,MailOutlined} from '@ant-design/icons';
import { MenuProps ,GetProp, Menu,Layout} from 'antd';
type MenuItem = GetProp<MenuProps, 'items'>[number];

const { Sider } = Layout;


function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items2: MenuItem[] = [
  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Leave Bank', '2', <CalendarOutlined />),
  getItem('Reports', '3', <MailOutlined />), 
]

const DashboardSider = () => {
  return (
    <Sider width={200} breakpoint='lg'>
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%'}} items={items2} />
    </Sider>
  )
}

export default DashboardSider