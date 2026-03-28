import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBallBaseball = themed(memo(function (props) {
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
      d: "M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.495 3.02a9 9 0 0 1 -9.475 9.475",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.98 11.505a9 9 0 0 0 -9.475 9.475",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9l2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13l2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 7l2 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 11l1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 11l1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 16l2 1",
      stroke: color
    })]
  });
}));
export { IconBallBaseball };
