import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLogicNor = themed(memo(function (props) {
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
      d: "M22 12h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 9h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 15h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconLogicNor };
