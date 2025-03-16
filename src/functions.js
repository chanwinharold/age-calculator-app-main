
function verifyDay(day, month, year) {
    let maxDays = new Date(year, month, 0).getDate()
    return (day > 0) && (day <= maxDays)
}
function verifyMonth(month) {
    return (month > 0) && (month < 12)
}
function verifyYear(year) {
    let currentYear = new Date().getFullYear()
    return (year >= 0) && (year <= currentYear)
}


function errorDay() {
    document.querySelector("input[name='day']").style.borderColor = 'hsl(0, 100%, 67%)'
    document.querySelector("input[name='day'] + span").textContent = 'Must be a valid day'
    document.querySelector(".labelDay").style.color = 'hsl(0, 100%, 67%)'
}
function errorMonth() {
    document.querySelector("input[name='month']").style.borderColor = 'hsl(0, 100%, 67%)'
    document.querySelector("input[name='month'] + span").textContent = 'Must be a valid month'
    document.querySelector(".labelMonth").style.color = 'hsl(0, 100%, 67%)'
}
function errorYear() {
    document.querySelector("input[name='year']").style.borderColor = 'hsl(0, 100%, 67%)'
    document.querySelector("input[name='year'] + span").textContent = 'Must be a valid year'
    document.querySelector(".labelYear").style.color = 'hsl(0, 100%, 67%)'
}


// TODO --> Rendre plus robuste la logique de calcul
function calcYear(month, year) {
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth() + 1
    if (currentMonth >= month) {
        return (currentYear - parseInt(year))
    } else return (currentYear - parseInt(year) - 1)
}
function calcMonth(month) {
    let currentMonth = new Date().getMonth() + 1
    if (currentMonth >= month) {
        return parseInt(month) - currentMonth
    } else return parseInt(month)
}
function calcDate(day) {
    let currentDay = new Date().getDate()
    return Math.abs(currentDay - parseInt(day))
}


function reset() {
    const inputDay = document.querySelector("input[name='day']")
    const inputMonth = document.querySelector("input[name='month']")
    const inputYear = document.querySelector("input[name='year']")
    const inputs = [inputDay, inputMonth, inputYear]

    const spanDay = document.querySelector("input[name='day'] + span")
    const spanMonth = document.querySelector("input[name='month'] + span")
    const spanYear = document.querySelector("input[name='year'] + span")
    const spans = [spanDay, spanMonth, spanYear]

    const labelDay = document.querySelector(".labelDay")
    const labelMonth = document.querySelector(".labelMonth")
    const labelYear = document.querySelector(".labelYear")
    const labels = [labelDay, labelMonth, labelYear]

    inputs.forEach((element) => {
        element.style.borderColor = 'black'
    })
    spans.forEach((element) => {
        element.textContent = ''
    })
    labels.forEach((element) => {
        element.style.color = 'black'
    })
}