import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBracketsContainStart = themed(memo(function (props) {
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
      d: "M9 4h-4v16h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 16h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16h-.01",
      stroke: color
    })]
  });
}));
export { IconBracketsContainStart };
