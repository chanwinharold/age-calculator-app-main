
function verifyDay(day) {
    return (parseInt(day) > 0) && (parseInt(day) <= 31)
}
function verifyMonth(month) {
    return (parseInt(month) > 0) && (parseInt(month) <= 12)
}
function verifyYear(year) {
    let currentYear = new Date().getFullYear()
    return (parseInt(year) >= 0) && (currentYear >= parseInt(year))
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


// TODO --> Corriger la logique de calcul du nombre de mois et de jours
function calcYear(year) {
    let currentYear = new Date().getFullYear()
    return (currentYear - parseInt(year))
}
function calcMonth(month) {
    let currentMonth = new Date().getMonth()
    return Math.abs(currentMonth - parseInt(month))
}
function calcDate(day) {
    let currentDay = new Date().getDay()
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