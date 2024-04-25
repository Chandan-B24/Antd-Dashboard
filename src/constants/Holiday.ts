export interface HolidayType {
    id : number,
    event : string,
    date : string
}


export const holidayData : HolidayType[] = [
    {
        id : 1,
        event : 'May Day',
        date : '01 May 2024'
    },
    {
        id : 2,
        event : 'Independence Day',
        date : '15 Aug 2024'
    },
    {
        id : 4,
        event : 'Gandhi Jayanti',
        date : '02 Oct 2024'
    },
    {
        id : 4,
        event : 'Deepwali',
        date : '20 Oct 2024'
    },
]