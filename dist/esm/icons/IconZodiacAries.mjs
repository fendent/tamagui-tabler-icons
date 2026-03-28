import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconZodiacAries = themed(memo(function (props) {
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
      d: "M12 5a5 5 0 1 0 -4 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 13a5 5 0 1 0 -4 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21l0 -16",
      stroke: color
    })]
  });
}));
export { IconZodiacAries };
