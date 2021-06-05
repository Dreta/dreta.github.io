// Copyright (c) 2021 Dreta, all rights reserved.

const discord = document.getElementById("discord");
const prim = document.getElementById("prim-container");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").href = "mai" + "lto:hel" + "lo@dr" + "eta.dev";
    document.getElementById("email-2").href = "mai" + "lto:yan" + "gma" + "in3@" + "gma" + "il.c" + "om";

    discord.onclick = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");
    };

    discord.onkeyup = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");
    };

    document.querySelector("body").onpointermove = (e) => {
        const width = window.innerWidth / 2;
        let transform = "";

        if (e.clientX > width) {
            transform = `rotateY(-${(e.clientX - width) / width * 30}deg) `;
        } else if (e.clientX <= width) {
            transform = `rotateY(${(width - e.clientX) / width * 30}deg) `;
        }

        const height = window.innerHeight / 2;
        if (e.clientY > height) {
            transform += `rotateX(${(e.clientY - width) / width * 30}deg)`;
        } else if (e.clientY <= height) {
            transform += `rotateX(-${(width - e.clientY) / width * 30}deg)`;
        }
        prim.style.transform = transform;
    };
});
