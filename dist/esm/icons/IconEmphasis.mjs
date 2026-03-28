import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconEmphasis = themed(memo(function (props) {
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
      d: "M16 5h-8v10h8m-1 -5h-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20l0 .01",
      stroke: color
    })]
  });
}));
export { IconEmphasis };
