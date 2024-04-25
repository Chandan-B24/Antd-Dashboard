import { Layout } from 'antd';
import Title from 'antd/es/typography/Title';
import LeaveCard from '../Cards/LeaveCard';
import { Calendar} from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { leaveData, leaveDataType } from '../../constants/LeaveData';
import Event from '../Event/Event';
import UpcomingHoliday from '../Holiday/UpcomingHoliday';
import Faq from '../Faq/Faq';
import Approver from '../Approver/Approver';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const { Content } = Layout;

const DashboardContent = () => {

  const updatedLeaveData: leaveDataType[] = [...leaveData];

  return (
    <Content style={{ minHeight: 280 }} className='bg-gray-100'>
      <Title level={5} className='font-poppins px-4 font-normal mt-4'>Dashboard</Title>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-4 py-2'>
        {updatedLeaveData.map((data) => {
          if (data.type === 'Calendar') {
            return (
              <div className='row-span-2'>
                <Calendar key={data.id} fullscreen={false} onPanelChange={onPanelChange} className='rounded'/>
              </div>
            )
          } else {
            return (
              <LeaveCard key={data.id} id={data.id} name={data.name} totalLeave={data.totalLeave} taken={data.taken} remaining={data.remaining} icon={data.icon} iconColor={data.iconColor}/>
            );
          }
        })}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-4 py-2'>
         <Event/>
         <UpcomingHoliday/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-4 py-2'>
         <Faq/>
         <Approver/>
      </div>
    </Content>
  );
};

export default DashboardContent;
