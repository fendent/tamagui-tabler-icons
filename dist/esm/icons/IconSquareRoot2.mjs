import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSquareRoot2 = themed(memo(function (props) {
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
      d: "M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h1l3 8l3 -16h10",
      stroke: color
    })]
  });
}));
export { IconSquareRoot2 };
