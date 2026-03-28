import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBadgeHd = themed(memo(function (props) {
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
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12h3",
      stroke: color
    })]
  });
}));
export { IconBadgeHd };
