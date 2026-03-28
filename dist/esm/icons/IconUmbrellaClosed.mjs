import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconUmbrellaClosed = themed(memo(function (props) {
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
      d: "M9 16l3 -13l3 13l-6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v3c0 2.667 4 2.667 4 0",
      stroke: color
    })]
  });
}));
export { IconUmbrellaClosed };
