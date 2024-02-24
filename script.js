var count = 0;
let button = document.getElementById("btn");
let countDisplay = document.getElementById("count");
button.addEventListener('click', function() {
    count++;
    countDisplay.innerHTML = count;
});