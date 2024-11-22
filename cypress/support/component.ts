import "./commands";
import { mount } from "cypress/react18";
import { createElement } from "react";
import "@/index.css";
import Providers from "@/providers/providers";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

const queryClient = new QueryClient();

Cypress.Commands.add("mount", (component, options) => {
    const wrappedComponent = createElement(Providers, null, component);
    const superWrappedComponent = createElement(
        BrowserRouter,
        null,
        wrappedComponent
    );
    const queryClientWrap = createElement(
        QueryClientProvider,
        { client: queryClient },
        superWrappedComponent
    );

    return mount(queryClientWrap, options);
});
