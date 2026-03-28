import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileBroken = themed(memo(function (props) {
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
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 16h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 13h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 10h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 13h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16h.01",
      stroke: color
    })]
  });
}));
export { IconFileBroken };
