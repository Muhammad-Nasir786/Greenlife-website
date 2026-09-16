 

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☾";

    } else {

        themeBtn.innerHTML = "☀";

    }

});
 

const plantForm = document.getElementById("plantForm");

plantForm.addEventListener("submit", function (event) {
 
    event.preventDefault();
 
    alert("Form submitted successfully! 🌱");
 
    plantForm.reset();

});
 
