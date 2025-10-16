function bmi() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "⚠️ Please enter both height and weight.";
        result.style.color = "yellow";
        return;
    }

    height = height / 100;
    let bmiValue = (weight / (height * height)).toFixed(2);

    let category = "";
    if (bmiValue < 18.5) {
        category = "Underweight 😕";
        result.style.color = "#ffffff";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = "Normal weight 😊";
        result.style.color = "#ffffff";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = "Overweight 😐";
        result.style.color = "#ffffff";
    } else {
        category = "Obese 😟";
        result.style.color = "#ffffff";
    }

    result.innerHTML = `Your BMI is <b>${bmiValue}</b> (${category})`;
}