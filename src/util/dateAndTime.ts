const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfTheWeekFull = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const daysIntoMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const monthOfTheYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const setCurrentDateAndTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let currentDate = `${day}/${month + 1}/${year} - ${hours}:${minutes}:${seconds}`;
    return currentDate;
}

export const formatDateAndTime = (getDateAndTime: string) => {
    const output = getDateAndTime.replace('T', ' - ');
    return output;
}

export const formatTime = (getDateAndTime: string) => {
    const output = getDateAndTime.slice(11, -3);
    return output;
}

export const formatDate = (getDateAndTime: string) => {
    const date = new Date(getDateAndTime);
    const weekDay = date.getUTCDay();
    const day = date.getDate();
    const month = date.getMonth();

    const output = `${dayOfTheWeek[weekDay]} ${daysIntoMonth[day - 1]}/${monthOfTheYear[month]}`;
    return output;
}

export const formatLongDate = (getDateAndTime: string) => {
    const date = new Date(getDateAndTime);
    const weekDay = date.getUTCDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const output = `${dayOfTheWeekFull[weekDay]} ${daysIntoMonth[day - 1]}/${monthOfTheYear[month]}/${year}`;
    return output;
}

export const getDurationFromTwoDates = (getStartDateAndTime: string, getEndDateEndTime: string) => {
    const start = new Date(getStartDateAndTime);
    const end = new Date(getEndDateEndTime);
    const diffrenceInMilliseconds =  end.getTime() - start.getTime();
    const differenceInMinutes = diffrenceInMilliseconds / 60000;
    return differenceInMinutes;
}