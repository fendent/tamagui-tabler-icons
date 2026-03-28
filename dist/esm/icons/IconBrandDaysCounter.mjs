import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandDaysCounter = themed(memo(function (props) {
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
      d: "M20.779 10.007a9 9 0 1 0 -10.77 10.772",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21h8v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8v4l3 3",
      stroke: color
    })]
  });
}));
export { IconBrandDaysCounter };
