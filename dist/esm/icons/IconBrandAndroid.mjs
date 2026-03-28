import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandAndroid = themed(memo(function (props) {
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
      d: "M4 10l0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 10l0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3l1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3l-1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 18l0 3",
      stroke: color
    })]
  });
}));
export { IconBrandAndroid };
