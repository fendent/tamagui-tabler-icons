import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCalendarCheck = themed(memo(function (props) {
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
      d: "M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 11h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 19l2 2l4 -4",
      stroke: color
    })]
  });
}));
export { IconCalendarCheck };
