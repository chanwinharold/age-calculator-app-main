const btnSubmit = document.querySelector("button")

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    reset()

    const inputDay = document.querySelector("input[name='day']")
    const inputMonth = document.querySelector("input[name='month']")
    const inputYear = document.querySelector("input[name='year']")

    let isGoodYear = verifyYear(inputYear.value)
    let isGoodMonth = verifyMonth(inputMonth.value)
    let isGoodDay = verifyDay(inputDay.value)


    if (isGoodDay && isGoodMonth && isGoodYear) {
        let day = calcDate(inputDay.value)
        let month = calcMonth(inputMonth.value)
        let year = calcYear(inputYear.value)

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