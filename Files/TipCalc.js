const totalBill = document.querySelector("#totalBill");
const serviceQual = document.querySelector("#serviceQual");
const numOfPeople = document.querySelector("#peopls");
const warning = document.querySelector("#alert")
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");
const tip = document.querySelector("#tip")
const each = document.querySelector("#each");
const reset = document.querySelector("#reset");


function calculateTip() {

    if (totalBill.value == "" || serviceQual.value == 0 || numOfPeople.value == 0) {
        warning.textContent = "Please Fill all Inputs"
        setTimeout(() => {
            warning.textContent = ""
        }, 2000);
    }
    // Calculate Tip

    let total = (totalBill.value * serviceQual.value) / numOfPeople.value

    total = (total * 100) / 100

    total = total.toFixed(2)
    tip.innerHTML = "<sup>$</sup>" + total
    each.style.display = "block"
    totalBill.value = ""
    serviceQual.value = 0
    numOfPeople.value = ""
}


calculate.addEventListener("click", calculateTip)

