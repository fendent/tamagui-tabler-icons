import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrencyYuan = themed(memo(function (props) {
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
      d: "M12 19v-7l-5 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5l-5 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13h8",
      stroke: color
    })]
  });
}));
export { IconCurrencyYuan };
