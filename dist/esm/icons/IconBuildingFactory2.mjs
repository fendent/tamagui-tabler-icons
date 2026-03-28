import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingFactory2 = themed(memo(function (props) {
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
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 21v-12l5 4v-4l5 4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 17h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 17h1",
      stroke: color
    })]
  });
}));
export { IconBuildingFactory2 };
