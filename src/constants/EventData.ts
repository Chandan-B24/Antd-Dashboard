import image from '../assets/image.png'
import men from '../assets/men.png'
import women from '../assets/women.png'

export interface eventDataTypes {
    id? : number,
    reason : string,
    day : string,
    color : string,
    textColor : string,
    img : string
}

export const eventData : eventDataTypes[] = [
    {
        id : 1,
        reason : 'Girija Sahu Birthday',
        day : 'Today',
        color : 'bg-blue-100',
        textColor : 'text-blue-400',    
        img : image
    },
    {
        id : 2,
        reason : 'Lenna Dutta Work at Anniversary',
        day : 'Today',
        color : 'bg-red-100',
        textColor : 'text-red-400',
        img : men
    },
    {
        id : 1,
        reason : 'Harsha Bhava Marriage Aniverrsary',
        day : 'Tommorrow',
        color : 'bg-purple-100',
        textColor : 'text-purple-400',
        img : women
    },
]

