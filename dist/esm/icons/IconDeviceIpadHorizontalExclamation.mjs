import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceIpadHorizontalExclamation = themed(memo(function (props) {
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
      d: "M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v.01",
      stroke: color
    })]
  });
}));
export { IconDeviceIpadHorizontalExclamation };
