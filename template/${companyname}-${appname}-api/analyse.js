const scanner = require("sonarqube-scanner");

scanner(
    {
        serverUrl: "http://${sonarqubeurl}:${sonarqubeport}/",
        options: {
            "sonar.projectName": "${CompanyName} ${AppName} API",
            "sonar.projectVersion": "1.1.0",
            "sonar.log.level": "WARN",
            "sonar.verbose": "false",
            "sonar.sources": "src",
            "sonar.tests": "src",
            "sonar.test.inclusions": "**/*.spec.ts",
            "sonar.exclusions": "**/*.spec.ts,src/frameworks/webserver/express/routes.ts,src/frameworks/webserver/express/server.ts,src/framework/inversionOfControll/inversify/inversify.ts",
            "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
        },
    },
    () => {
        // callback is required
    }
);