export type Size =
    | `${number}px`
    | `${number}%`
    | `${number}rem`
    | `${number}em`;

export type FourSizes =
    | Size
    | `${Size} ${Size}`
    | `${Size} ${Size} ${Size}`
    | `${Size} ${Size} ${Size} ${Size}`;
