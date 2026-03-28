import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBriefcase = themed(memo(function (props) {
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
      d: "M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13a20 20 0 0 0 18 0",
      stroke: color
    })]
  });
}));
export { IconBriefcase };
