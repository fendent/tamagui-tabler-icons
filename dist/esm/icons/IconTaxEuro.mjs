import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTaxEuro = themed(memo(function (props) {
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
      d: "M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3q -1 4 -3 4t -3 -4l6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 14h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 11.172a3 3 0 1 0 0 5.656",
      stroke: color
    })]
  });
}));
export { IconTaxEuro };
