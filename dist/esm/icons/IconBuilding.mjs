import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuilding = themed(memo(function (props) {
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
      d: "M3 21l18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",
      stroke: color
    })]
  });
}));
export { IconBuilding };
