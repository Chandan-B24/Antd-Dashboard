import { Card,Space, } from "antd"
import EventList from "./EventList"
import { MdOutlineEventAvailable } from "react-icons/md";
import { eventData } from "../../constants/EventData";


const Event = () => {
  return (
    <Card title={
        <Space>
            <MdOutlineEventAvailable className="text-gray-500 font-bold"/> 
            <span className="text-sm">Events</span>
        </Space>
    }  className='col-span-2 rounded'>
           {eventData && eventData.map ((data) => <EventList key={data.id} reason={data.reason} day={data.day} img={data.img} color={data.color} textColor={data.textColor}/>) }
           
    </Card>
  )
}

export default Event