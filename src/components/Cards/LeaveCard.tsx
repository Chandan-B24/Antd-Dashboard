import { Card } from "antd"
import { leaveDataType } from "../../constants/LeaveData";
import React from "react";


const LeaveCard:React.FC<leaveDataType> = (props) => {

    const IconComponent= props.icon!;

  return (
    <Card bordered={false} className="rounded row-span-1">
        <div className="flex justify-center gap-4 items-center">
            <IconComponent className={`${props.iconColor}`}/>
            <span className="font-semibold">{props.name}</span>
        </div>
        <div className="mt-8 flex justify-around items-center">
            <div className="text-center">
                <span className="block text-2xl font-semibold">
                    {props.totalLeave}
                </span>
                <span className="block text-gray-400 text-[12px]">
                    Total Leave
                </span>
            </div>
            <div className="text-center">
                <span className="block text-2xl font-semibold">
                    {props.taken}
                </span>
                <span className="block text-gray-400 text-[12px]">
                    Taken
                </span>
            </div>
            <div className="text-center">
                <span className="block text-2xl font-semibold">
                    {props.remaining}
                </span>
                <span className="block text-gray-400 text-[12px]">
                    Remaining
                </span>
            </div>
        </div>
    </Card>
  )
}

export default LeaveCard