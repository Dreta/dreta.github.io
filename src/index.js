// Copyright (c) 2021 Dreta, all rights reserved.

const discord = document.getElementById("discord");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").href = "mai" + "lto:hel" + "lo@dr" + "eta.dev";
    document.getElementById("email-2").href = "mai" + "lto:yan" + "gma" + "in3@" + "gma" + "il.c" + "om";

    discord.onclick = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");
    };

    discord.onkeyup = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");
    };
});
