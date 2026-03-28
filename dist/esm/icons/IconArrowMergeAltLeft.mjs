import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowMergeAltLeft = themed(memo(function (props) {
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
      d: "M8 7l4 -4l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 18.01v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15.02v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 13.03v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394",
      stroke: color
    })]
  });
}));
export { IconArrowMergeAltLeft };
