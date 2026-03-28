import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconShovelPitchforks = themed(memo(function (props) {
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
      d: "M5 3h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 3v12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 15h6v3a3 3 0 0 1 -6 0v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21v-3a3 3 0 0 1 6 0v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21v-18",
      stroke: color
    })]
  });
}));
export { IconShovelPitchforks };
