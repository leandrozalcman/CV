function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    var textBox = document.querySelector(".text-box");
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        textBox.style.color = "white";
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-wallpaper-with-white-lines_483537-4468.jpg?w=1380&t=st=1698873727~exp=1698874327~hmac=9bb6cafc88a5ac65aef544ef1f538f69b5e399d8cea6347e62284f07a1501a94')";
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
        document.querySelector(".background-image").style.backgroundImage = "url('https://img.freepik.com/free-vector/blue-wallpaper-with-white-lines_483537-4468.jpg?w=1380&t=st=1698873727~exp=1698874327~hmac=9bb6cafc88a5ac65aef544ef1f538f69b5e399d8cea6347e62284f07a1501a94')";
        document.querySelector(".dark-mode").innerHTML = '<i class="fas fa-moon"></i>';
    }
};
