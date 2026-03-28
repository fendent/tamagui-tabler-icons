import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunWind = themed(memo(function (props) {
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
      d: "M14.468 10a4 4 0 1 0 -5.466 5.46",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 3v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.6 5.6l.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.4 5.6l-.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.3 17.7l-.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 13h5a2 2 0 1 0 0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286",
      stroke: color
    })]
  });
}));
export { IconSunWind };
