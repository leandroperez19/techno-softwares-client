import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        type: "light" | "dark";
        palette: {
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                fifthly: string;
                senary: string;
                septenary: string;
                accent: string;
                danger: string;
            };
            common: {
                white: string;
                black: string;
                yellow: string;
            };
            page: {
                primaryBorder: string;
                bodyColor: string;
                scrollbarBg: string;
                scrollbarThumb: string;
            };
        };
        input: {
            primary: {
                borderColor: string;
                background: string;
                color: string;
                borderOnFocus: string;
                labelColor: string;
                labelColorFocus: string;
                dangerColor: string;
            };
        };
        button: {
            primary: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
            secondary: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
            tertiary: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
            transparent: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
        };
        navbar: {
            backgroundColor: string;
        };
        sidebar: {
            backgroundColor: string;
            sectionColor: string;
            sectionBgHover: string;
        };

        box: {
            background: string;
            color: string;
        };
    }
}
