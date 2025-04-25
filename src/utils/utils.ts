export const generateArray = (number: number) => Array.from(Array(number).keys())

const FormatDate = (date: string) => {
    var options:Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "2-digit"};
    const newDate =  new Date(date)
    return newDate.toLocaleDateString("fr-FR", options)
}

export {
    FormatDate
}