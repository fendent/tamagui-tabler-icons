import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCompass = themed(memo(function (props) {
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
      d: "M8 16l2 -6l6 -2l-2 6l-6 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 19l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 12l2 0",
      stroke: color
    })]
  });
}));
export { IconCompass };
