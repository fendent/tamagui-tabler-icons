import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconNfc = themed(memo(function (props) {
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
      d: "M11 20a3 3 0 0 1 -3 -3v-11l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 4a3 3 0 0 1 3 3v11l-5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3l0 -10",
      stroke: color
    })]
  });
}));
export { IconNfc };
