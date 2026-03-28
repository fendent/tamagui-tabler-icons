import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAerialLift = themed(memo(function (props) {
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
      d: "M4 5l16 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.894 8h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 14h14",
      stroke: color
    })]
  });
}));
export { IconAerialLift };
