import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceIpadDown = themed(memo(function (props) {
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
      d: "M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 3l-3 -3",
      stroke: color
    })]
  });
}));
export { IconDeviceIpadDown };
