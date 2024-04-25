import { IconType } from "react-icons";
import { SiSimpleanalytics } from "react-icons/si";
import { FaNotesMedical, FaLightbulb } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";

export interface leaveDataType {
    id?: number;
    name?: string;
    totalLeave?: number;
    taken?: number;
    remaining?: number;
    icon?: IconType;
    iconColor?: string;
    type?: string;
}

export const leaveData: leaveDataType[] = [
    {
        id: 1,
        name: 'Casual Leave',
        totalLeave: 4,
        taken: 2,
        remaining: 2,
        icon: SiSimpleanalytics,
        iconColor: 'text-blue-500'
    },
    {
        id: 2,
        name: 'Medical Leave',
        totalLeave: 2,
        taken: 0,
        remaining: 0,
        icon: FaNotesMedical,
        iconColor: 'text-red-500'
    },
    {
        id: 3,
        type: 'Calendar'
    },
    {
        id: 4,
        name: 'Emergency Leave',
        totalLeave: 2,
        taken: 1,
        remaining: 1,
        icon: MdContactEmergency,
        iconColor: 'text-orange-500'
    },
    {
        id: 5,
        name: 'Other Leave',
        totalLeave: 5,
        taken: 1,
        remaining: 4,
        icon: FaLightbulb,
        iconColor: 'text-green-500'
    },
];
