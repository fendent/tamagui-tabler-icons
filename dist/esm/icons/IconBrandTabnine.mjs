import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconBrandTabnine = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M20 12l-12 6.75m12 -6.75l-12 -6.75m12 6.75v-4.527l-8 -4.473l-4 2.25m12 6.75v4.5l-8 4.5l-4 -2.25m0 -13.5l-4 2.222v9.028l4 2.25l12 -6.75",
      stroke: color
    })
  });
}));
export { IconBrandTabnine };
