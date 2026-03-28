import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAdCircleOff = themed(memo(function (props) {
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
      d: "M4.91 4.949a9.968 9.968 0 0 0 -2.91 7.051c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05 -2.909",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.778 16.793a9.955 9.955 0 0 0 1.222 -4.793c0 -5.523 -4.477 -10 -10 -10c-1.74 0 -3.376 .444 -4.8 1.225",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15v-4.5a1.5 1.5 0 0 1 2.138 -1.358",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.854 9.853c.094 .196 .146 .415 .146 .647v4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14v1h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13v-2a2 2 0 0 0 -2 -2h-1v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconAdCircleOff };
