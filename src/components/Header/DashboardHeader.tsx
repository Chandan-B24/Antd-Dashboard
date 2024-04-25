import Title from 'antd/es/typography/Title';
import { Avatar,Space,Dropdown ,Layout,MenuProps} from 'antd';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import image from "../../assets/image.png"
import {UserOutlined,DownOutlined} from '@ant-design/icons'

const { Header } = Layout;


const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: '0',
    },
    {
      label: 'Settings',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '3',
    },
  ];

const DashboardHeader = () => {


  return (
    <Header style={{ display: 'flex',justifyContent : 'space-between',alignItems: 'center',backgroundColor : 'white'}}>
    <Title level={2} style={{color : 'green',marginBottom:'0rem'}} className='h-full flex items-center font-poppins'>Leave <span className='font-normal ml-2'>Manager</span></Title>
    <div className='flex justify-center items-center gap-4'>
     <BiSolidMessageSquareDetail className='text-xl text-gray-500'/>
     <FaBell className='text-xl text-gray-500'/>
      <div className='flex justify-between items-center gap-4'>
        <Avatar shape="square" src={image} size={40} icon={<UserOutlined />} />
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
             <span className='text-sm'>Chandan</span>
              <DownOutlined className='text-gray-500'/>
            </Space>
            <div>
            </div>
          </a>
        </Dropdown>
      </div>
    </div>
  </Header>
  )
}

export default DashboardHeader