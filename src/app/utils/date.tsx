const DateFormat = (date: string) => {
    var d = new Date(date),
        mouth = '' + (d.getMonth() + 1),
        day = '' + d.getDay(),
        year = '' + d.getFullYear();

        if(mouth.length < 2) mouth = '0' + mouth
        if(day.length < 2) day = '0' + day

        return [day, mouth, year].join('.')
}

const isNew = (date: string, passed: number) => {
    const d = new Date(date)
    const c = new Date()

    const dateWithPassed 
        = new Date(d.getFullYear(), d.getMonth(), (d.getDay() + passed))
    const currentDateFormat
        = new Date(c.getFullYear(), c.getMonth(), c.getDay())

    if(dateWithPassed >= currentDateFormat) return true
    else return false
}

export {
    DateFormat,
    isNew
}