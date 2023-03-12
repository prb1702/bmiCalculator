function calculateBmi() {
    var ht = document.getElementById('height').value;
    var wt = document.getElementById('weight').value;

    var bmi = wt/(ht*ht);
    var result = bmi.toFixed(2);

    console.log(result);

    document.getElementById("res").innerHTML = "Your BMI is " + result;
}