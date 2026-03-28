import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHomeRibbon = themed(memo(function (props) {
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
      d: "M16 15h5v7l-2.5 -1.5l-2.5 1.5l0 -7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 21v-6a2 2 0 0 1 2 -2h1.5",
      stroke: color
    })]
  });
}));
export { IconHomeRibbon };
