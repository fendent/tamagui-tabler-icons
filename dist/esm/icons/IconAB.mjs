import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAB = themed(memo(function (props) {
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
      d: "M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6l0 12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3",
      stroke: color
    })]
  });
}));
export { IconAB };
