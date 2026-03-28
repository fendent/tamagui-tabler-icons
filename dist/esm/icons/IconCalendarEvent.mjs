import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCalendarEvent = themed(memo(function (props) {
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
      d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 11l16 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15h2v2h-2l0 -2",
      stroke: color
    })]
  });
}));
export { IconCalendarEvent };
