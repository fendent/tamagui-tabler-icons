import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconForms = themed(memo(function (props) {
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
      d: "M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 12h.01",
      stroke: color
    })]
  });
}));
export { IconForms };
