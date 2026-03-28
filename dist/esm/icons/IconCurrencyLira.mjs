import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyLira = themed(memo(function (props) {
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
      d: "M10 5v15a7 7 0 0 0 7 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15l8 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 7l-8 4",
      stroke: color
    })]
  });
}));
export { IconCurrencyLira };
