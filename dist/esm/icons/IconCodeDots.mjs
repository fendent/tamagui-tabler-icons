import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCodeDots = themed(memo(function (props) {
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
      d: "M15 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2",
      stroke: color
    })]
  });
}));
export { IconCodeDots };
