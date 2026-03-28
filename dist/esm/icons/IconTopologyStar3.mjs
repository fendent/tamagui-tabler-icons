import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTopologyStar3 = themed(memo(function (props) {
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
      d: "M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 7l-2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 7l2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 14l-2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 14l2 3",
      stroke: color
    })]
  });
}));
export { IconTopologyStar3 };
