// Copyright (c) 2021 Dreta, all rights reserved.

const dmContainer = document.getElementById("dark-mode-container");
const darkMode = document.getElementById("dark-mode");

if (localStorage.getItem("dark")) {
    dmContainer.classList.add("dark");
    darkMode.checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    for (const section of document.querySelectorAll(".section")) {
        section.onmouseover = () => {
            const current = document.querySelector(".current");
            current.classList.remove("current");
            current.classList.add("move");
            section.classList.add("current");
        };
    }

    darkMode.onchange = () => {
        if (darkMode.checked) {
            dmContainer.classList.add("dark");
            localStorage.setItem("dark", "dark");
        } else {
            dmContainer.classList.remove("dark");
            localStorage.removeItem("dark");
        }
    };
});
