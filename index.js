function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert to meters

    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);

        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<h3>Result</h3>
                               <p>Your BMI: ${bmi.toFixed(2)}</p>`;
    } else {
        alert("Please enter valid weight and height values.");
    }
}
