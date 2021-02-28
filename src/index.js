// Copyright (c) 2021 Dreta, all rights reserved.

const csi = document.getElementById("csi");
const discord = document.getElementById("discord");

const textSwitch = [
    "a developer.",
    "sbflanwkdf",
    "xguclaivp",
    "nhtloapn",
    "poigoqm",
    "mphtsm",
    "cofjle",
    "copfpe",
    "copiba",
    "copied!"
];

let intervalPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").href = "mailto:hello@dreta.dev";

    discord.onclick = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");

        let i = 0;
        let j = textSwitch.length;
        let intervalSet = false;
        if (intervalPlaying) {
            return;
        }
        intervalPlaying = true;
        let interval = setInterval(() => {
            i++;
            if (i >= textSwitch.length) {
                if (!intervalSet) {
                    intervalSet = true;
                    csi.focus();
                    setTimeout(() => {
                        discord.focus();
                        let interval2 = setInterval(() => {
                            j--;
                            if (j < 0) {
                                clearInterval(interval2);
                                intervalPlaying = false;
                                return;
                            }
                            csi.innerText = textSwitch[j];
                        }, 50)
                    }, 1000);
                }
                clearInterval(interval);
                return;
            }
            csi.innerText = textSwitch[i];
        }, 50);
    };

    discord.onkeyup = async () => {
        await navigator.clipboard.writeText("Dre" + "t" + "a#6" + "65" + "5");
        csi.innerText = "copied!";
        setTimeout(() => csi.innerText = "a developer.", 2000);
    };
});
