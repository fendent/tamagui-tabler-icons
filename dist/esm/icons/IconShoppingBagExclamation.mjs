import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconShoppingBagExclamation = themed(memo(function (props) {
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
      d: "M15 21h-6.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.258 1.678",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 11v-5a3 3 0 0 1 6 0v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v.01",
      stroke: color
    })]
  });
}));
export { IconShoppingBagExclamation };
