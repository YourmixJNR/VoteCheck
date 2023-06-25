function ageFunction() {

    let voteable;

    let age = Number(document.getElementById('age').value);

    if (isNaN(age)) {
        voteable = "Your input is not a number";
    }
    else {
        voteable = (age < 18) ? "Sorry you can't" : "Yeah you can";
    }

    document.getElementById('display').innerHTML = `${voteable} vote`;
}

window.onload = function() {

    var ageInput = document.getElementById('age');
    ageInput.value = '';

};