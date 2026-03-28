import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBalloon = themed(memo(function (props) {
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
      d: "M14 8a2 2 0 0 0 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2",
      stroke: color
    })]
  });
}));
export { IconBalloon };
