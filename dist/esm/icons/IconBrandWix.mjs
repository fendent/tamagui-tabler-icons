import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandWix = themed(memo(function (props) {
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
      d: "M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 11.5v3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 9l5 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 9l-5 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 9h.01",
      stroke: color
    })]
  });
}));
export { IconBrandWix };
