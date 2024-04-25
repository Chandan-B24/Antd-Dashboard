import React from 'react'
import { HolidayType } from '../../constants/Holiday'

const HolidayList:React.FC<HolidayType> = (props) => {
  return (
    <div className='flex justify-between items-center mb-8 last:mb-0'>
        <span className='text-sm font-semibold text-gray-500'>{props.event}</span>
        <span className='text-sm font-semibold text-gray-500'>{props.date}</span>
    </div>
  )
}

export default HolidayList