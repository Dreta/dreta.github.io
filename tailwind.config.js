// Copyright (c) 2021 Dreta, all rights reserved.

module.exports = {
    purge: [
        "./*.html",
        "./src/*.js"
    ],
    theme: {
        fontFamily: {
            default: ["Gilroy", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
        },
        extend: {
            colors: {
                body: "#000000",
                primary: "#323a72",
                secondary: "#131e7e",
                twitter: "#1ca0f1",
                orangered: "#ff5a1e",
                discord: "#6b85d8",
                email: "#1e88e5"
            }
        }
    }
};
