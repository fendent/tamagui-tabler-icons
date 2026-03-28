import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSlideshow = themed(memo(function (props) {
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
      d: "M15 6l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13l4 -4a3 5 0 0 1 3 0l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 12l2 -2a3 5 0 0 1 3 0l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21l.01 0",
      stroke: color
    })]
  });
}));
export { IconSlideshow };
