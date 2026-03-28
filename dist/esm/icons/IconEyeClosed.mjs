import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconEyeClosed = themed(memo(function (props) {
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
      d: "M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15l2.5 -3.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 14.976l-2.492 -3.776",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17l.5 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17l-.5 -4",
      stroke: color
    })]
  });
}));
export { IconEyeClosed };
