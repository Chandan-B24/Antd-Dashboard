import { Avatar, Card, Space } from "antd"
import { FaUserGroup } from "react-icons/fa6";
import men from '../../assets/men.png'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


const Approver = () => {
  return (
    <Card title={
        <Space>
            <FaUserGroup className="text-gray-500 font-bold"/> 
            <span className="text-sm">Approver</span>
        </Space>
    } className="rounded">
        <div className="flex justify-center items-center mt-4">
            <div className="flex justify-around items-center gap-4">
                <Avatar size={64} src={men} className="border-2 border-green-600"/>
                <div className="flex flex-col">
                    <span className="font-bold">Girija Sahu</span>
                    <span className="text-[10px] font-medium text-gray-500">Web Developer</span>
                </div>
            </div> 
        </div>
        <div className="flex justify-around items-center mt-8">
            <div className="flex justify-center items-center gap-2">
                <IoMdMail className="text-green-600"/>
                <span className="text-[12px]">girijasahu@gmail.com</span>
            </div> 
            <div className="flex justify-center items-center gap-2">
                <FaPhone className="text-green-600"/>
                <span className="text-[12px]">+91 9986723172</span>
            </div> 
        </div>
    </Card>
  )
}

export default Approver