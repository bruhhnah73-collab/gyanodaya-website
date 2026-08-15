const darkModeToggle = document.getElementById("darkModeToggle");

// Remember the user's choice
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
}

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙";

    }

});