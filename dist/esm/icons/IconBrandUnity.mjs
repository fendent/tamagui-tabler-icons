import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandUnity = themed(memo(function (props) {
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
      d: "M14 3l6 4v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 17l-6 4l-6 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14v-7l6 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7l8 5v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 7l-8 5",
      stroke: color
    })]
  });
}));
export { IconBrandUnity };
