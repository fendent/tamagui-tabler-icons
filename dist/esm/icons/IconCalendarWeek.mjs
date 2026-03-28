import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCalendarWeek = themed(memo(function (props) {
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
      d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12",
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
      d: "M7 14h.013",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.01 14h.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.01 14h.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.015 14h.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.015 17h.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.01 17h.005",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.01 17h.005",
      stroke: color
    })]
  });
}));
export { IconCalendarWeek };
