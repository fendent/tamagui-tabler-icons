import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAlphabetKorean = themed(memo(function (props) {
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
      d: "M7 7h6c0 2.5 -1.593 8.474 -6 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 5v14l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12h2",
      stroke: color
    })]
  });
}));
export { IconAlphabetKorean };
