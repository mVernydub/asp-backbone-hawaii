require.config({
    baseUrl: "/scripts/app",
    paths: {
        jquery: "../lib/jquery-1.10.2",
        underscore: "../lib/underscore",
        backbone: "../lib/backbone"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require(["app"], function (app) {
    app.initialize();
});