import { DefaultTheme } from "styled-components";
import colors from "@styles/constants/colors";

const darkTheme: DefaultTheme = {
    type: "light",
    palette: {
        text: {
            primary: colors.technoRed,
            secondary: colors.technoLightGray,
            tertiary: colors.technoGray,
            quaternary: colors.technoColdBlue,
            fifthly: colors.technoOrangeRed,
            senary: colors.technoDarkGray,
            septenary: colors.technoAlmostWhite,
            accent: colors.technoYellow,
            danger: colors.white,
        },
        common: {
            white: colors.white,
            black: colors.black,
            yellow: colors.technoYellow,
        },
        page: {
            primaryBorder: colors.softGray,
            bodyColor: colors.technoVeryLightBlue,
            scrollbarBg: colors.technoTranslucentBlue,
            scrollbarThumb: colors.technoBlue,
        },
    },
    input: {
        primary: {
            borderColor: colors.opaqueGray,
            background: colors.transparent,
            color: colors.black,
            borderOnFocus: colors.black,
            labelColor: colors.technoLightGray,
            labelColorFocus: colors.opaqueGray,
            dangerColor: colors.red,
        },
    },
    button: {
        primary: {
            background: colors.technoBlue,
            color: colors.technoAlmostWhite,
            hoverColor: colors.technoAlmostWhite,
            hoverBackground: colors.technoBlue,
            focusColor: colors.technoAlmostWhite,
            focusBackground: colors.technoBlue,
            borderColor: colors.technoBlue,
            shadowColor: colors.technoTranslucentBlue,
        },
        secondary: {
            background: colors.technoOrangeRed,
            color: colors.white,
            hoverColor: colors.white,
            hoverBackground: colors.technoOrangeRed,
            focusColor: colors.white,
            focusBackground: colors.technoOrangeRed,
            borderColor: colors.technoOrangeRed,
            shadowColor: colors.technoTranslucentRed,
        },
        tertiary: {
            background: colors.white,
            color: colors.technoOrangeRed,
            hoverColor: colors.technoOrangeRed,
            hoverBackground: colors.lightBlueGray,
            focusColor: colors.technoRed,
            focusBackground: colors.lightBlueGray,
            borderColor: colors.lightBlueGray,
            shadowColor: colors.transparent,
        },
        transparent: {
            background: colors.transparent,
            color: colors.black,
            hoverColor: colors.black,
            hoverBackground: colors.technoLightTransparent,
            focusColor: colors.black,
            focusBackground: colors.technoLightTransparent,
            borderColor: colors.transparent,
            shadowColor: colors.shadow,
        },
    },
    navbar: {
        backgroundColor: colors.technoRed,
    },
    sidebar: {
        backgroundColor: colors.white,
        sectionColor: colors.almostBlack,
        sectionBgHover: colors.lightBlueGray,
    },

    box: {
        background: colors.white,
        color: colors.technoDarkerGray,
    },
};

export default darkTheme;
