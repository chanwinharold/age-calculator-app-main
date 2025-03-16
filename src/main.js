const btnSubmit = document.querySelector("button")


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    reset()

    const inputDay = document.querySelector("input[name='day']")
    const inputMonth = document.querySelector("input[name='month']")
    const inputYear = document.querySelector("input[name='year']")

    let isGoodYear = verifyYear(parseInt(inputYear.value))
    let isGoodMonth = verifyMonth(parseInt(inputMonth.value))
    let isGoodDay = verifyDay(parseInt(inputDay.value), parseInt(inputMonth.value), parseInt(inputYear.value))


    if (isGoodDay && isGoodMonth && isGoodYear) {
        let year = calcYear(inputMonth.value, inputYear.value)
        let month = calcMonth(inputMonth.value)
        let day = calcDate(inputDay.value)

        document.querySelector(".displayDays").textContent = `${day}`
        document.querySelector(".displayMonths").textContent = `${month}`
        document.querySelector(".displayYears").textContent = `${year}`
    } else {
        if (!isGoodDay)
            errorDay()
        if (!isGoodMonth)
            errorMonth()
        if (!isGoodYear)
            errorYear()

        document.querySelector(".displayDays").textContent = "- - "
        document.querySelector(".displayMonths").textContent = "- - "
        document.querySelector(".displayYears").textContent = "- - "
    }
})

console.log()