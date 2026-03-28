import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTornado = themed(memo(function (props) {
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
      d: "M21 4l-18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 16l-6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 20l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8l14 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l12 0",
      stroke: color
    })]
  });
}));
export { IconTornado };
