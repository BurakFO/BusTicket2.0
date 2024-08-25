import dayjs from "dayjs"

export const dateToString = (date) => {
    const formattedDate = dayjs(date).format('DD MMMM YYYY');
    return formattedDate;
}

export const getCurrentLocaleDate = () => {

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return { month, year, date }

}