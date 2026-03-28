import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandYandex = themed(memo(function (props) {
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
      d: "M15 20v-16h-2a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20l3 -7",
      stroke: color
    })]
  });
}));
export { IconBrandYandex };
