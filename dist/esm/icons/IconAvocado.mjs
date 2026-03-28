import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAvocado = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M17.8 14.04a3.905 3.905 0 0 1 1.337 -2.075c1.195 -.985 1.816 -2.285 1.863 -3.902c-.047 -1.43 -.54 -2.626 -1.477 -3.586c-.96 -.938 -2.156 -1.43 -3.585 -1.477c-1.618 .047 -2.918 .668 -3.903 1.863c-.562 .68 -1.254 1.125 -2.074 1.336c-.938 .188 -1.828 .48 -2.672 .88c-.844 .398 -1.559 .878 -2.144 1.44c-1.43 1.501 -2.145 3.224 -2.145 5.169c0 1.946 .715 3.668 2.145 5.168c1.5 1.429 3.222 2.144 5.168 2.144c1.945 0 3.667 -.715 5.167 -2.145c.563 -.585 1.055 -1.3 1.477 -2.144c.398 -.844 .68 -1.723 .844 -2.637v-.035l-.001 .001",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.87 10.036c-.942 .112 -1.794 .538 -2.556 1.278c-.74 .762 -1.166 1.614 -1.278 2.556c-.135 .92 .112 1.704 .74 2.354c.65 .628 1.435 .875 2.354 .74c.942 -.112 1.794 -.538 2.556 -1.278c.74 -.762 1.166 -1.614 1.278 -2.556c.135 -.92 -.112 -1.704 -.74 -2.354c-.65 -.628 -1.435 -.875 -2.354 -.74",
      stroke: color
    })]
  });
}));
export { IconAvocado };
