import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowDownDashed = themed(memo(function (props) {
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
      d: "M12 5v.5m0 3v1.5m0 3v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 13l-6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 13l6 6",
      stroke: color
    })]
  });
}));
export { IconArrowDownDashed };
