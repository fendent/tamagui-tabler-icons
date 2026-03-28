import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconClick = themed(memo(function (props) {
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
      d: "M3 12l3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.8 7.8l-2.2 -2.2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.2 7.8l2.2 -2.2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.8 16.2l-2.2 2.2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l9 3l-4 2l-2 4l-3 -9",
      stroke: color
    })]
  });
}));
export { IconClick };
