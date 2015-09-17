Package.describe({
    name: "orikami:react-semantic-ui",
    version: "0.0.2",
    summary: "react-semantify wrapper package",
    git: "https://github.com/dreamyourweb/react-semantic-ui.git",
    documentation: "README.md"
});

Npm.depends({
    "react-semantify": "0.3.1"
});

Package.onUse(function(api) {
    api.versionsFrom("1.2-rc.4");

    api.use([
        "react@0.1.9",
        "cosmos:browserify@0.5.0"
    ]);

    api.addFiles(["app.browserify.js"]);

    api.export(["Semantify"], ["client"]);
});
