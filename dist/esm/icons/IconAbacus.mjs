import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAbacus = themed(memo(function (props) {
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
      d: "M5 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 21v-18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 15h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 13v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 13v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 5v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 5v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21h18",
      stroke: color
    })]
  });
}));
export { IconAbacus };
