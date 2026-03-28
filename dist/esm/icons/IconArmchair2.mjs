import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArmchair2 = themed(memo(function (props) {
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
      d: "M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 19v2",
      stroke: color
    })]
  });
}));
export { IconArmchair2 };
