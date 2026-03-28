import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconImageInPicture = themed(memo(function (props) {
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
      d: "M13 15c-2 0 -5 1 -5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2l0 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7v-2a1 1 0 0 1 1 -1h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 4h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4h2a1 1 0 0 1 1 1v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 17v2a1 1 0 0 1 -1 1h-2",
      stroke: color
    })]
  });
}));
export { IconImageInPicture };
