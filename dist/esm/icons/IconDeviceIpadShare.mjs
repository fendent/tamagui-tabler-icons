import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceIpadShare = themed(memo(function (props) {
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
      d: "M12 21h-6a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18h3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconDeviceIpadShare };
