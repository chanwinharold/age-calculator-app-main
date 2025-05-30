
const jour = document.getElementById('day')
const mois = document.getElementById('month')
const annee = document.getElementById("year")
const form = document.querySelector("form")
const label_jour = document.querySelector('label:has(.labelDay)')
const label_mois = document.querySelector('label:has(.labelMonth)')
const label_annee = document.querySelector("label:has(.labelYear)")
const erreur_jour = document.querySelector('#day + span')
const erreur_mois = document.querySelector('#month + span')
const erreur_annee = document.querySelector("#year + span")
const champVide = "This field cannot be empty"
const champInvalid = "This field is invalid"

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const thisYear = new Date().getFullYear()
    let valid = 0
    let day, month, year, age, m, d;
    cleanError(label_jour, jour, erreur_jour)
    cleanError(label_mois, mois, erreur_mois)
    cleanError(label_annee, annee, erreur_annee)

    if (jour.value.trim() === "") {
        displayError(label_jour, jour, erreur_jour, champVide)
    } else if (!jour.checkValidity()) {
        displayError(label_jour, jour, erreur_jour, champInvalid)
    } else {
        day = jour.value
        valid++
    }

    if (mois.value.trim() === "") {
        displayError(label_mois, mois, erreur_mois, champVide)
    } else if (!mois.checkValidity()) {
        displayError(label_mois, mois, erreur_mois, champInvalid)
    } else {
        month = mois.value
        valid++
    }

    if (annee.value.trim() === "") {
        displayError(label_annee, annee, erreur_annee, champVide)
    } else if (!annee.checkValidity() || annee.value > thisYear) {
        displayError(label_annee, annee, erreur_annee, champInvalid)
    } else {
        year = annee.value
        valid++
    }

    if (valid === 3) {
        const birthDate = new Date(year, month - 1, day)
        const today = new Date()

        age = today.getFullYear() - birthDate.getFullYear();
        m = today.getMonth() - birthDate.getMonth();
        d = today.getDate() - birthDate.getDate();

        if (m < 0 || (m === 0 && d < 0)) {
            age--;
        }
        document.querySelector('.displayDays').innerText = d
        document.querySelector('.displayMonths').innerText = Math.abs(m)
        document.querySelector('.displayYears').innerText = age
    }

})


function displayError(label, input, span, message) {
    label.style.color = 'red'
    input.style.borderColor = 'red'
    span.innerText = message
}
function cleanError(label, input, span) {
    label.style.color = 'black'
    input.style.borderColor = 'black'
    span.innerText = ""
}