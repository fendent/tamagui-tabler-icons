import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCellSignal5 = themed(memo(function (props) {
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
      d: "M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a.731 .731 0 0 1 1.249 .517v15.269",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 7v13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v-9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 20v-5",
      stroke: color
    })]
  });
}));
export { IconCellSignal5 };
