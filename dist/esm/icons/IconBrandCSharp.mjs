import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandCSharp = themed(memo(function (props) {
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
      d: "M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7l-1 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 7l-1 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10h7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 14h-7.5",
      stroke: color
    })]
  });
}));
export { IconBrandCSharp };
