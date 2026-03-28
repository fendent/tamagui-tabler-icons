import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAngle = themed(memo(function (props) {
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
      d: "M21 19h-18l9 -15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.615 15.171h.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.515 11.771h.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.715 8.671h.015",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.415 5.971h.015",
      stroke: color
    })]
  });
}));
export { IconAngle };
