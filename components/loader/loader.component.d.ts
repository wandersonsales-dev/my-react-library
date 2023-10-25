import React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
    customSize?: string;
    size?: "small" | "bigger" | "big" | "";
    borderSize?: string;
}
declare const _default: ({ color, customSize, size, borderSize, className, style, }: Props) => import("react/jsx-runtime").JSX.Element;
export default _default;
