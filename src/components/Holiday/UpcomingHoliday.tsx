import { Card, Space } from "antd"
import { FaCalendarAlt } from "react-icons/fa";
import HolidayList from "./HolidayList";
import { holidayData } from "../../constants/Holiday";


const UpcomingHoliday = () => {
  return (
    <Card title={
        <Space>
            <FaCalendarAlt className="text-gray-500 font-bold"/> 
            <span className="text-sm">Upcoming Holiday</span>
        </Space>
    } className="rounded">
        {holidayData && holidayData.map((data)=> {
          return  <HolidayList id={data.id} event={data.event} date={data.date}/>
        })}
    </Card>
  )
}

export default UpcomingHoliday