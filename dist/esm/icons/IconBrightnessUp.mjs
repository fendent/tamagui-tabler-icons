import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrightnessUp = themed(memo(function (props) {
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
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7l1.4 -1.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 12l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17l1.4 1.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17l-1.4 1.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12l-2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 7l-1.4 -1.4",
      stroke: color
    })]
  });
}));
export { IconBrightnessUp };
