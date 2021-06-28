// Copyright (c) 2021 Dreta, all rights reserved.

module.exports = {
    purge: [
        "./*.html",
        "./src/*.js"
    ],
    theme: {
        fontFamily: {
            default: ["Gilroy", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
            cn: ["Microsoft YaHei", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
        },
        extend: {
            colors: {
                body: "#000000",
                primary: "#ff2e00",
                secondary: "#ff4f00",
                twitter: "#1ca0f1",
                orangered: "#ff5a1e",
                discord: "#5865f2",
                email: "#00d5ff",
                "email-2": "#1e88e5"
            }
        }
    }
};
