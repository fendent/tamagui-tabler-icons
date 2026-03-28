import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconClockDollar = themed(memo(function (props) {
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
      d: "M20.866 10.45a9 9 0 1 0 -7.815 10.488",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v5l1.5 1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 21v1m0 -8v1",
      stroke: color
    })]
  });
}));
export { IconClockDollar };
