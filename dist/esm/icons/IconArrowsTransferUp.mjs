import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsTransferUp = themed(memo(function (props) {
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
      d: "M7 21v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 6l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 18l-3 3l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 9v2",
      stroke: color
    })]
  });
}));
export { IconArrowsTransferUp };
