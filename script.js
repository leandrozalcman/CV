function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    var textBox = document.querySelector(".text-box");
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        textBox.style.color = "white";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-waves-dots-abstract-background_79603-881.jpg?w=1380&t=st=1699818098~exp=1699818698~hmac=053dddaaac2adb45fdd1ca0ca812ae31b30b53b944a07afadfae3660f61c570f')";
        localStorage.setItem("theme", "dark");
    } else {
        textBox.style.color = "black";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-geometric-frame-vector_53876-140352.jpg')";
        localStorage.setItem("theme", "light");
    }
    var darkModeButton = document.querySelector(".dark-mode");
    if (body.classList.contains("dark")) {
        darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        darkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function toggleMenu() {
    var x = document.getElementsByClassName("menu")[0];
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

window.onload = function () {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.getElementsByTagName("body")[0].classList.add("dark");
        document.querySelector(".text-box").style.color = "white";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-waves-dots-abstract-background_79603-881.jpg?w=1380&t=st=1699818098~exp=1699818698~hmac=053dddaaac2adb45fdd1ca0ca812ae31b30b53b944a07afadfae3660f61c570f')";
        document.querySelector(".dark-mode").innerHTML = '<i class="fas fa-moon"></i>';
    }
};
