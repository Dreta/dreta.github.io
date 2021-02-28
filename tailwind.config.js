// Copyright (c) 2021 Dreta, all rights reserved.

module.exports = {
    purge: [
        "./*.html",
        "./src/*.js"
    ],
    theme: {
        fontFamily: {
            default: ["Lato", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
        },
        extend: {
            colors: {
                body: "#eee6be",
                twitter: "#1ca0f1",
                orangered: "#ff5a1e",
                discord: "#6b85d8",
                email: "#1e88e5"
            }
        }
    }
};
