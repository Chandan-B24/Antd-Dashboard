import { Avatar } from "antd"
// import { UserOutlined } from '@ant-design/icons';
import React from "react";
import { eventDataTypes } from "../../constants/EventData";


const EventList:React.FC<eventDataTypes> = (props) => {
  return (
    <div className={`flex justify-between items-center px-4 ${props.color} p-3 rounded-lg mb-4 last:mb-0`}>
        <div className="flex justify-center items-center gap-2">
            <Avatar src={props.img} />
            <span className="text-sm text-gray-500 font-semibold">{props.reason}</span>
        </div>
        <span className={`${props.textColor} text-[12px] font-semibold`}>{props.day}</span>
    </div>
  )
}

export default EventList