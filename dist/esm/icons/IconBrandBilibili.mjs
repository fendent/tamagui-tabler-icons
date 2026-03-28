import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandBilibili = themed(memo(function (props) {
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
      d: "M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 3l2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 3l-2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 13v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11v2",
      stroke: color
    })]
  });
}));
export { IconBrandBilibili };
