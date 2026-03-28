import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandVsco = themed(memo(function (props) {
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
      d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.364 5.636l-2.828 2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.364 18.364l-2.828 -2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.636 18.364l2.828 -2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.636 5.636l2.828 2.828",
      stroke: color
    })]
  });
}));
export { IconBrandVsco };
