import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMicrowave = themed(memo(function (props) {
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
      d: "M3 7a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 6v12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 9h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0",
      stroke: color
    })]
  });
}));
export { IconMicrowave };
