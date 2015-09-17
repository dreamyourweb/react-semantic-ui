Package.describe({
    name: "orikami:react-semantic-ui",
    version: "0.0.1",
    summary: "react-semantify wrapper package",
    git: "https://",
    documentation: "README.md"
});

Npm.depends({
    "react-semantify": "0.3.1"
});

Package.onUse(function(api) {
    api.versionsFrom("1.2-rc.4");

    api.use([
        "react",
        "cosmos:browserify"
    ]);

    api.addFiles(["app.browserify.js"]);

    api.export(["Semantify"], ["client"]);
});
