import { Card, Space } from "antd"
import { PiWarningCircleFill } from "react-icons/pi";
import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { getItems } from "../../constants/FaqData";

const Faq = () => {

    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: ' #EEEEEE',
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };

  return (
    <Card title={
        <Space>
            <PiWarningCircleFill className="text-gray-500 font-bold"/> 
            <span className="text-sm">FAQ</span>
        </Space>
    } className="col-span-2 rounded">
         <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
          />
    </Card>
  )
}

export default Faq