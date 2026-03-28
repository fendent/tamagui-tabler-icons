import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunMoon = themed(memo(function (props) {
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
      d: "M9.173 14.83a4 4 0 1 1 5.657 -5.657",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.6 5.6l.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21l18 -18",
      stroke: color
    })]
  });
}));
export { IconSunMoon };
