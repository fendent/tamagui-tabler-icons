import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconClockSearch = themed(memo(function (props) {
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
      d: "M20.993 11.646a9 9 0 1 0 -9.318 9.348",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v5l1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.2 20.2l1.8 1.8",
      stroke: color
    })]
  });
}));
export { IconClockSearch };
