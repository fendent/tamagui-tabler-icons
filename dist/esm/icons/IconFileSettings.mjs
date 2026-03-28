import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileSettings = themed(memo(function (props) {
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
      d: "M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 10.5v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.031 12.25l-1.299 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.268 15l-1.3 .75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15.803l-1.285 -.773",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.285 12.97l-1.285 -.773",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2",
      stroke: color
    })]
  });
}));
export { IconFileSettings };
