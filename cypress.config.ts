import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
    e2e: {
        baseUrl: "http://localhost:5173",
        specPattern: [
            "cypress/e2e/**/*.cy.{ts,tsx}",
            "src/tests/e2e/*.cy.{ts,tsx}",
        ],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
