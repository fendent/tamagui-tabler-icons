import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyAfghani = themed(memo(function (props) {
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
      d: "M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19v2",
      stroke: color
    })]
  });
}));
export { IconCurrencyAfghani };
