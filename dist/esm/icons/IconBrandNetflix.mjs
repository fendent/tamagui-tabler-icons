import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandNetflix = themed(memo(function (props) {
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
      d: "M9 3l10 18h-4l-10 -18l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 3v18h4v-10.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 21v-18h-4v10.5",
      stroke: color
    })]
  });
}));
export { IconBrandNetflix };
