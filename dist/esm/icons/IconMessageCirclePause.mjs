import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMessageCirclePause = themed(memo(function (props) {
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
      d: "M12.989 19.932a9.93 9.93 0 0 1 -5.289 -.932l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.131 1.818 3.056 4.37 2.692 6.824",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 17v5",
      stroke: color
    })]
  });
}));
export { IconMessageCirclePause };
