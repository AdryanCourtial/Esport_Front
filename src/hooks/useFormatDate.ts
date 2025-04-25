const useFormatDate = () => {

    const FormatDate = (date: string, options: Intl.DateTimeFormatOptions) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString("fr-FR", options)
    }

    return {
        FormatDate
    }

}

export default useFormatDate