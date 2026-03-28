import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandGoogleHome = themed(memo(function (props) {
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
      d: "M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13v4h10v-4l-5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.8 5.2l-11.8 11.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17v4",
      stroke: color
    })]
  });
}));
export { IconBrandGoogleHome };
