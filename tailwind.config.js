// Copyright (c) 2021 Dreta, all rights reserved.

module.exports = {
    darkMode: "class",
    purge: [
        "./*.html",
        "./src/*.js"
    ],
    theme: {
        fontFamily: {
            default: ["\"Exo 2\"", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
        },
        extend: {
            colors: {
                about: "#52d5f9",
                rants: "#79d5f5",
                contact: "#02e5e5",
                "dark-about": "#057999",
                "dark-rants": "#0a6180",
                "dark-contact": "#02b7b7",
                "light-black": "#181a1b"
            }
        }
    }
};
