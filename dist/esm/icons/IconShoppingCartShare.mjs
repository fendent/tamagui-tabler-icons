import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconShoppingCartShare = themed(memo(function (props) {
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
      d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 17h-6.5v-14h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 5l14 1l-1 7h-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconShoppingCartShare };
