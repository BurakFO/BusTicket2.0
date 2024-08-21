import dayjs from "dayjs"

export const dateToString = (date) => {
    const formattedDate = dayjs(date).format('DD MMMM YYYY');
    return formattedDate;
}