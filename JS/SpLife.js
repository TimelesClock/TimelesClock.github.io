//Validation of NRIC using an algorithm, only accepts T and S NRIC
function validateNRIC() {

    // Fetch the the forms we want to apply custom Bootstrap validation styles to
    var nric = document.getElementById('nric').value
    var result = document.getElementById('validated')
    var valid = false

    var first_letter = nric[0]
    var valid_letter = ['T', 't', 'S', 's']
    var check = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
    var nricweight = "2765432"
    var sum = 0

    if (valid_letter.includes(first_letter) && nric.length == 9) {
        for (var i = 0; i < nric.slice(1, -1).length; i++) {
            sum += nric.slice(1, -1)[i] * nricweight[i]
        }
        if (first_letter == "T" || first_letter == "t") {
            sum += 4
        }
        if (check[sum % 11] == nric[nric.length-1]) {
            valid = true
        }
    }
    if (valid) {
        result.innerHTML = "This is a valid NRIC!"
        result.classList.add("bg-success")
        result.classList.remove("bg-danger")
    } else {
        result.innerHTML = "This is not a valid NRIC!"
        result.classList.add("bg-danger")
        result.classList.remove("bg-success")
    }

}

document.getElementById('nric_submit').addEventListener('click', function (e) {
    e.preventDefault();
    validateNRIC()
})