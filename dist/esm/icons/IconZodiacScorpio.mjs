import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconZodiacScorpio = themed(memo(function (props) {
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
      d: "M3 4a2 2 0 0 1 2 2v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 6a2 2 0 0 1 4 0v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3",
      stroke: color
    })]
  });
}));
export { IconZodiacScorpio };
