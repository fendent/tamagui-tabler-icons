import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRuler = themed(memo(function (props) {
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
      d: "M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 4l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4l0 2",
      stroke: color
    })]
  });
}));
export { IconRuler };
