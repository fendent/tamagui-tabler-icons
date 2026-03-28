import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconEaseInOutControlPoints = themed(memo(function (props) {
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
      d: "M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 4h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 4h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 20c8 0 10 -16 18 -16",
      stroke: color
    })]
  });
}));
export { IconEaseInOutControlPoints };
